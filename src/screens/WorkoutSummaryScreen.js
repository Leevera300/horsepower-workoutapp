import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";
import { getDivisionFromStat } from "../utils/stats";

export default function WorkoutSummaryScreen() {
  const { lastSummary, t } = useApp();
  if (!lastSummary) return <Screen><Card><AppText muted>No summary yet.</AppText></Card></Screen>;
  const { workout, personalRecords, stats, medals } = lastSummary;
  return (
    <Screen>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{workout.name}</AppText>
        <AppText>{t("musclesWorked")}: {workout.musclesWorked.map(t).join(", ")}</AppText>
        <AppText>{t("totalVolume")}: {workout.totalVolume}kg</AppText>
        <AppText>{t("medalsEarned")}: +{medals.amount}</AppText>
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("personalRecords")}</AppText>
        {personalRecords.length ? personalRecords.map((pr) => <AppText key={pr.id}>{pr.exerciseName}: {pr.value} {pr.unit}</AppText>) : <AppText muted>No new PRs.</AppText>}
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("updatedStats")}</AppText>
        {["strength", "cardio", "endurance", "consistency", "volume", "muscleBalance", "overall"].map((key) => <AppText key={key}>{t(key)}: {stats[key]} ({t(getDivisionFromStat(stats[key]))})</AppText>)}
      </Card>
    </Screen>
  );
}
