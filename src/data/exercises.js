export const exerciseDatabase = {
  "Bench Press": { category: "strength", muscles: ["chest", "triceps", "shoulders"] },
  Squat: { category: "strength", muscles: ["quads", "glutes", "hamstrings", "core"] },
  Deadlift: { category: "strength", muscles: ["hamstrings", "glutes", "back", "core"] },
  "Pull-up": { category: "strength", muscles: ["back", "biceps"] },
  "Shoulder Press": { category: "strength", muscles: ["shoulders", "triceps"] },
  "Bicep Curl": { category: "strength", muscles: ["biceps"] },
  "Triceps Pushdown": { category: "strength", muscles: ["triceps"] },
  "Leg Press": { category: "strength", muscles: ["quads", "glutes"] },
  Running: { category: "cardio", muscles: ["cardio", "quads", "hamstrings", "calves"] },
};

export const exerciseNames = Object.keys(exerciseDatabase);

export const defaultCharacterItems = [
  { id: "shirt-iron", name: "Iron Shirt", type: "shirt", price: 80, imageKey: "shirt", owned: true },
  { id: "shorts-black", name: "Black Shorts", type: "shorts", price: 70, imageKey: "shorts", owned: true },
  { id: "shoes-gold", name: "Gold Sprint Shoes", type: "shoes", price: 120, imageKey: "shoes", owned: false },
  { id: "gloves-power", name: "Power Gloves", type: "gloves", price: 100, imageKey: "gloves", owned: false },
  { id: "belt-elite", name: "Elite Belt", type: "belt", price: 150, imageKey: "belt", owned: false },
  { id: "bg-arena", name: "Arena Background", type: "background", price: 180, imageKey: "background", owned: false },
  { id: "badge-founder", name: "Founder Badge", type: "badge", price: 200, imageKey: "badge", owned: false },
];

export const mockLeaderboard = [
  { id: "1", name: "Mina", gender: "Female", ageGroup: "25 to 29", weightClass: "60 to 70kg", benchPress: 82, squat: 125, deadlift: 155, averageRunningPace: 5.2, weeklyRunningDistance: 24, longestRun: 12, workoutStreak: 9, totalWeeklyVolume: 14200 },
  { id: "2", name: "Joon", gender: "Male", ageGroup: "30 to 34", weightClass: "90 to 100kg", benchPress: 120, squat: 160, deadlift: 190, averageRunningPace: 5.8, weeklyRunningDistance: 18, longestRun: 10, workoutStreak: 6, totalWeeklyVolume: 21400 },
  { id: "3", name: "Alex", gender: "Male", ageGroup: "18 to 24", weightClass: "70 to 80kg", benchPress: 105, squat: 150, deadlift: 185, averageRunningPace: 4.9, weeklyRunningDistance: 31, longestRun: 16, workoutStreak: 14, totalWeeklyVolume: 19800 },
  { id: "4", name: "Sara", gender: "Female", ageGroup: "35 to 39", weightClass: "50 to 60kg", benchPress: 68, squat: 108, deadlift: 132, averageRunningPace: 5.4, weeklyRunningDistance: 28, longestRun: 15, workoutStreak: 11, totalWeeklyVolume: 10800 },
  { id: "5", name: "You", gender: "Male", ageGroup: "30 to 34", weightClass: "90 to 100kg", benchPress: 90, squat: 120, deadlift: 150, averageRunningPace: 6.0, weeklyRunningDistance: 5, longestRun: 5, workoutStreak: 1, totalWeeklyVolume: 8200 },
];

export const weightClasses = ["All", "Under 50kg", "50 to 60kg", "60 to 70kg", "70 to 80kg", "80 to 90kg", "90 to 100kg", "100 to 110kg", "110 to 120kg", "120kg+"];
export const ageGroups = ["All", "Under 18", "18 to 24", "25 to 29", "30 to 34", "35 to 39", "40 to 44", "45 to 49", "50 to 59", "60+"];
