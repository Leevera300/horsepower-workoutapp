import { exerciseDatabase } from "../data/exercises";
import { muscleGroups } from "../constants/theme";

export function getDivisionFromStat(score) {
  if (score >= 150) return "legend";
  if (score >= 120) return "elite";
  if (score >= 100) return "diamond";
  if (score >= 80) return "platinum";
  if (score >= 60) return "gold";
  if (score >= 40) return "silver";
  if (score >= 20) return "bronze";
  return "rookie";
}

export function getNextDivision(score) {
  const next = [
    { key: "bronze", at: 20 },
    { key: "silver", at: 40 },
    { key: "gold", at: 60 },
    { key: "platinum", at: 80 },
    { key: "diamond", at: 100 },
    { key: "elite", at: 120 },
    { key: "legend", at: 150 },
  ].find((item) => score < item.at);
  return next || { key: "legend", at: score };
}

export function calculateOverallStat(stats) {
  return Math.round(
    stats.strength * 0.3 +
      stats.cardio * 0.2 +
      stats.endurance * 0.15 +
      stats.consistency * 0.15 +
      stats.volume * 0.1 +
      stats.muscleBalance * 0.1
  );
}

export function calculateStrengthStat(records) {
  const bench = records.benchPress || 0;
  const squat = records.squat || 0;
  const deadlift = records.deadlift || 0;
  return Math.round((bench * 0.28 + squat * 0.22 + deadlift * 0.2) / 1.2);
}

export function calculateRunningPace(distance, duration) {
  const km = Number(distance);
  const min = Number(duration);
  if (!km || !min) return 0;
  return min / km;
}

export function calculateCardioStat(runningRecords) {
  const pace = runningRecords.bestPace || 0;
  if (!pace) return 0;
  return Math.max(0, Math.round(120 - pace * 10));
}

export function calculateEnduranceStat(runningHistory) {
  return Math.round((runningHistory.weeklyDistance || 0) * 2 + (runningHistory.longestRun || 0) * 3 + (runningHistory.totalDuration || 0) / 12);
}

export function calculateConsistencyStat(workoutHistory) {
  const days = new Set(workoutHistory.map((w) => w.date?.slice(0, 10))).size;
  return Math.round(days * 8 + workoutHistory.length * 4);
}

export function calculateWorkoutVolume(workout) {
  return workout.exercises.reduce((total, exercise) => {
    return total + (exercise.sets || []).reduce((setTotal, set) => setTotal + Number(set.weight || 0) * Number(set.reps || 0), 0);
  }, 0);
}

export function calculateVolumeStat(workoutHistory) {
  const total = workoutHistory.reduce((sum, workout) => sum + (workout.totalVolume || calculateWorkoutVolume(workout)), 0);
  return Math.round(total / 350);
}

export function detectMusclesWorked(exercises) {
  const muscles = new Set();
  exercises.forEach((exercise) => {
    const match = exerciseDatabase[exercise.exerciseName] || exerciseDatabase[exercise.name];
    (match?.muscles || exercise.musclesWorked || []).forEach((muscle) => muscles.add(muscle));
  });
  return Array.from(muscles);
}

export function calculateMuscleBalanceStat(weeklyMuscleGroups) {
  const unique = new Set(weeklyMuscleGroups);
  const coverage = unique.size / muscleGroups.length;
  return Math.round(coverage * 100);
}

export function detectPersonalRecords(workout, existingRecords) {
  const prs = [];
  workout.exercises.forEach((exercise) => {
    if (exercise.category === "cardio") {
      const distance = Number(exercise.distance || 0);
      const pace = calculateRunningPace(distance, exercise.duration);
      const longest = existingRecords.find((r) => r.recordType === "longestRun")?.value || 0;
      const bestPace = existingRecords.find((r) => r.recordType === "averageRunningPace")?.value || 99;
      if (distance > longest) prs.push(makeRecord("longestRun", exercise.exerciseName, distance, "km", longest));
      if (pace && pace < bestPace) prs.push(makeRecord("averageRunningPace", exercise.exerciseName, pace, "min/km", bestPace));
      return;
    }
    const bestSet = (exercise.sets || []).reduce((best, set) => Math.max(best, Number(set.weight || 0)), 0);
    const recordType = normalizeRecordType(exercise.exerciseName);
    if (!recordType || !bestSet) return;
    const previous = existingRecords.find((r) => r.recordType === recordType)?.value || 0;
    if (bestSet > previous) prs.push(makeRecord(recordType, exercise.exerciseName, bestSet, "kg", previous));
  });
  return prs;
}

export function calculateMedalsEarned(workout, personalRecords) {
  let amount = 20;
  const reasons = ["Log a workout"];
  if (workout.exercises.length >= 3) {
    amount += 10;
    reasons.push("3+ exercises bonus");
  }
  if (personalRecords.length > 0) {
    amount += 20;
    reasons.push("Personal record bonus");
  }
  return { amount, reasons };
}

export function getSuggestedWorkoutFocus(weeklyMuscleGroups) {
  const trained = new Set(weeklyMuscleGroups);
  const missed = muscleGroups.filter((muscle) => !trained.has(muscle));
  if (["quads", "hamstrings", "glutes"].some((muscle) => missed.includes(muscle))) return { missed, focus: "Leg day: Squat, Leg Press, Deadlift, Calf Raises" };
  if (missed.includes("back")) return { missed, focus: "Pull day: Pull-up, Deadlift, Row, Bicep Curl" };
  if (missed.includes("chest")) return { missed, focus: "Push day: Bench Press, Shoulder Press, Triceps Pushdown" };
  if (missed.includes("cardio")) return { missed, focus: "Cardio day: 20-30 minute easy run" };
  return { missed, focus: "Balanced week. Keep building volume." };
}

export function recalculateStats(workouts, records) {
  const weeklyMuscles = workouts.flatMap((workout) => workout.musclesWorked || []);
  const bestPace = records.filter((r) => r.recordType === "averageRunningPace").sort((a, b) => a.value - b.value)[0]?.value || 0;
  const longestRun = Math.max(0, ...records.filter((r) => r.recordType === "longestRun").map((r) => r.value));
  const weeklyDistance = workouts.flatMap((w) => w.exercises).reduce((sum, ex) => sum + Number(ex.distance || 0), 0);
  const totalDuration = workouts.flatMap((w) => w.exercises).reduce((sum, ex) => sum + Number(ex.duration || 0), 0);
  const strengthRecords = {
    benchPress: records.find((r) => r.recordType === "benchPress")?.value || 0,
    squat: records.find((r) => r.recordType === "squat")?.value || 0,
    deadlift: records.find((r) => r.recordType === "deadlift")?.value || 0,
  };
  const nextStats = {
    strength: calculateStrengthStat(strengthRecords),
    cardio: calculateCardioStat({ bestPace }),
    endurance: calculateEnduranceStat({ weeklyDistance, longestRun, totalDuration }),
    consistency: calculateConsistencyStat(workouts),
    volume: calculateVolumeStat(workouts),
    muscleBalance: calculateMuscleBalanceStat(weeklyMuscles),
  };
  return { ...nextStats, overall: calculateOverallStat(nextStats), updatedAt: new Date().toISOString() };
}

function normalizeRecordType(name) {
  const key = String(name).toLowerCase();
  if (key.includes("bench")) return "benchPress";
  if (key.includes("squat")) return "squat";
  if (key.includes("deadlift")) return "deadlift";
  return null;
}

function makeRecord(recordType, exerciseName, value, unit, previousValue) {
  return { id: `${recordType}-${Date.now()}-${Math.random()}`, userId: "local-user", recordType, exerciseName, value, unit, previousValue, achievedAt: new Date().toISOString() };
}
