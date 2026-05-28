import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { AppText } from "../components/AppText";
import { muscleGroups, colors } from "../constants/theme";
import { useApp } from "../context/AppContext";

export default function MuscleMapScreen() {
  const { workouts, t } = useApp();
  const trained = new Set(workouts.flatMap((workout) => workout.musclesWorked || []));
  return (
    <Screen>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("musclesThisWeek")}</AppText>
        <View style={styles.grid}>
          {muscleGroups.map((muscle) => <View key={muscle} style={[styles.tile, trained.has(muscle) && styles.trained]}><AppText small>{t(muscle)}</AppText></View>)}
        </View>
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("missedMuscles")}</AppText>
        <AppText muted>{muscleGroups.filter((muscle) => !trained.has(muscle)).map(t).join(", ")}</AppText>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 12 },
  tile: { width: "30%", minHeight: 54, borderRadius: 8, borderWidth: 1, borderColor: colors.line, alignItems: "center", justifyContent: "center", padding: 6 },
  trained: { borderColor: colors.accent, backgroundColor: "#2B2111" },
});
