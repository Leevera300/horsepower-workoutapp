import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";
import { getSuggestedWorkoutFocus } from "../utils/stats";

export default function AICoachScreen() {
  const { workouts, t } = useApp();
  const weeklyMuscles = workouts.flatMap((workout) => workout.musclesWorked || []);
  const suggestion = getSuggestedWorkoutFocus(weeklyMuscles);
  return (
    <Screen>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("premiumPreview")}</AppText>
        <AppText muted>{t("ruleSuggestion")}</AppText>
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("missedMuscles")}</AppText>
        <AppText>{suggestion.missed.map(t).join(", ")}</AppText>
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("suggestedFocus")}</AppText>
        <AppText>{suggestion.focus}</AppText>
      </Card>
    </Screen>
  );
}
