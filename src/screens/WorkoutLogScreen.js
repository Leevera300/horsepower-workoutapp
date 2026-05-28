import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";

export default function WorkoutLogScreen({ navigation }) {
  const { workouts, t } = useApp();
  return (
    <Screen>
      <Button title={t("addWorkout")} onPress={() => navigation.navigate("AddWorkout")} />
      {workouts.map((workout) => (
        <Card key={workout.id}>
          <AppText style={{ fontWeight: "900" }}>{workout.name}</AppText>
          <AppText muted>{workout.date} · {workout.type}</AppText>
          <AppText>{t("musclesWorked")}: {(workout.musclesWorked || []).map(t).join(", ")}</AppText>
          <AppText>{t("totalVolume")}: {workout.totalVolume}kg · {t("medalsEarned")}: {workout.medalsEarned}</AppText>
        </Card>
      ))}
      {!workouts.length && <Card><AppText muted>No workouts logged yet.</AppText></Card>}
    </Screen>
  );
}
