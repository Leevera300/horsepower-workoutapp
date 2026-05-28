import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";

const labels = ["benchPress", "squat", "deadlift", "powerliftingTotal", "fastestMile", "fastest5k", "longestRun", "weeklyDistance", "workoutStreak"];

export default function RecordsScreen() {
  const { records, t } = useApp();
  const latest = (type) => records.find((r) => r.recordType === type);
  const powerTotal = ["benchPress", "squat", "deadlift"].reduce((sum, type) => sum + Number(latest(type)?.value || 0), 0);
  return (
    <Screen>
      {labels.map((label) => (
        <Card key={label}>
          <AppText style={{ fontWeight: "900" }}>{t(label)}</AppText>
          <AppText muted>{label === "powerliftingTotal" ? `${powerTotal} kg` : latest(label) ? `${latest(label).value} ${latest(label).unit}` : "No record yet"}</AppText>
        </Card>
      ))}
    </Screen>
  );
}
