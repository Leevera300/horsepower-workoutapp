import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import { AppText } from "../components/AppText";
import { exerciseDatabase, exerciseNames } from "../data/exercises";
import { useApp } from "../context/AppContext";
import { colors } from "../constants/theme";

export default function AddWorkoutScreen({ navigation }) {
  const { logWorkout, t } = useApp();
  const [name, setName] = useState("Push Day");
  const [type, setType] = useState("strength");
  const [notes, setNotes] = useState("");
  const [exerciseName, setExerciseName] = useState("Bench Press");
  const [weight, setWeight] = useState("80");
  const [reps, setReps] = useState("10");
  const [sets, setSets] = useState("3");
  const [distance, setDistance] = useState("5");
  const [duration, setDuration] = useState("30");
  const [exercises, setExercises] = useState([]);

  const addExercise = () => {
    const base = exerciseDatabase[type === "cardio" ? "Running" : exerciseName];
    const item = type === "cardio"
      ? { id: `ex-${Date.now()}`, exerciseName: "Running", category: "cardio", sets: [], distance, duration, musclesWorked: base.muscles }
      : { id: `ex-${Date.now()}`, exerciseName, category: "strength", sets: Array.from({ length: Number(sets || 1) }, (_, index) => ({ id: `set-${Date.now()}-${index}`, weight, reps })), distance: null, duration: null, musclesWorked: base.muscles };
    setExercises((current) => [...current, item]);
  };

  const submit = () => {
    logWorkout({ name, type, notes, exercises });
    navigation.navigate("WorkoutSummary");
  };

  return (
    <Screen>
      <Input label={t("workoutName")} value={name} onChangeText={setName} />
      <View style={styles.row}>
        <Button title={t("strengthWorkout")} variant={type === "strength" ? "gold" : "secondary"} onPress={() => setType("strength")} style={styles.half} />
        <Button title={t("runningWorkout")} variant={type === "cardio" ? "gold" : "secondary"} onPress={() => setType("cardio")} style={styles.half} />
      </View>
      {type === "strength" ? (
        <Card>
          <AppText muted>{t("exercise")}</AppText>
          <View style={styles.chips}>{exerciseNames.filter((n) => n !== "Running").map((item) => <Button key={item} title={item} variant={exerciseName === item ? "gold" : "secondary"} onPress={() => setExerciseName(item)} style={styles.chip} />)}</View>
          <Input label={t("sets")} value={sets} onChangeText={setSets} keyboardType="numeric" />
          <Input label={t("reps")} value={reps} onChangeText={setReps} keyboardType="numeric" />
          <Input label={t("weightKg")} value={weight} onChangeText={setWeight} keyboardType="numeric" />
          <Button title={t("addExercise")} onPress={addExercise} />
        </Card>
      ) : (
        <Card>
          <Input label={t("distanceKm")} value={distance} onChangeText={setDistance} keyboardType="numeric" />
          <Input label={t("durationMin")} value={duration} onChangeText={setDuration} keyboardType="numeric" />
          <Button title={t("addExercise")} onPress={addExercise} />
        </Card>
      )}
      <Input label={t("notes")} value={notes} onChangeText={setNotes} multiline />
      {exercises.map((exercise) => <Card key={exercise.id}><AppText>{exercise.exerciseName}</AppText><AppText muted>{(exercise.musclesWorked || []).map(t).join(", ")}</AppText></Card>)}
      <Button title={t("logWorkout")} onPress={submit} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 10 },
  half: { flex: 1 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginVertical: 8 },
  chip: { minHeight: 38, marginVertical: 0, backgroundColor: colors.surface2 },
});
