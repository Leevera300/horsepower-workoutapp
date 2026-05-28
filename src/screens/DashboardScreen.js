import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import { AppText } from "../components/AppText";
import Card from "../components/Card";
import Button from "../components/Button";
import StatCard from "../components/StatCard";
import { useApp } from "../context/AppContext";
import { colors } from "../constants/theme";
import { getDivisionFromStat, getSuggestedWorkoutFocus } from "../utils/stats";

const statKeys = ["strength", "cardio", "endurance", "consistency", "volume", "muscleBalance"];

export default function DashboardScreen({ navigation }) {
  const { user, stats, workouts, t } = useApp();
  const weeklyMuscles = workouts.flatMap((workout) => workout.musclesWorked || []);
  const suggestion = getSuggestedWorkoutFocus(weeklyMuscles);
  const recent = workouts[0];
  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <AppText title>{t("appName")}</AppText>
          <AppText style={styles.gold}>{t("appMarks")}</AppText>
        </View>
        <Button title={t("settings")} variant="secondary" onPress={() => navigation.navigate("Settings")} />
      </View>
      <Card style={styles.overall}>
        <AppText muted>{user?.name || t("noProfile")}</AppText>
        <AppText style={styles.overallValue}>{stats.overall} {t(getDivisionFromStat(stats.overall))}</AppText>
        <AppText style={styles.gold}>{t("medals")}: {user?.medals || 0}</AppText>
      </Card>
      <View style={styles.grid}>
        {statKeys.map((key) => (
          <View key={key} style={styles.gridItem}>
            <StatCard label={t(key)} value={stats[key]} t={t} onPress={() => navigation.navigate("StatsDetail", { statKey: key })} />
          </View>
        ))}
      </View>
      <Card>
        <AppText style={styles.section}>{t("recentWorkout")}</AppText>
        <AppText muted>{recent ? `${recent.name} · ${recent.totalVolume}kg · +${recent.medalsEarned}` : "No workouts yet"}</AppText>
      </Card>
      <Card>
        <AppText style={styles.section}>{t("musclesThisWeek")}</AppText>
        <AppText>{weeklyMuscles.length ? [...new Set(weeklyMuscles)].map(t).join(", ") : "None yet"}</AppText>
        <AppText style={styles.section}>{t("missedMuscles")}</AppText>
        <AppText muted>{suggestion.missed.slice(0, 6).map(t).join(", ")}</AppText>
      </Card>
      <Card>
        <AppText style={styles.section}>{t("suggestedFocus")}</AppText>
        <AppText>{suggestion.focus}</AppText>
        <Button title={t("aiCoach")} variant="secondary" onPress={() => navigation.navigate("AICoach")} />
      </Card>
      <Card>
        <AppText style={styles.section}>{t("currentPreview")}</AppText>
        <AppText style={styles.avatar}>◆ HP ◆</AppText>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 12 },
  gold: { color: colors.accent, fontWeight: "800" },
  overall: { backgroundColor: colors.surface2 },
  overallValue: { fontSize: 36, fontWeight: "900", marginVertical: 6 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  gridItem: { width: "48%" },
  section: { fontWeight: "800", marginBottom: 6, marginTop: 6 },
  avatar: { fontSize: 32, color: colors.accent, textAlign: "center", marginTop: 12 },
});
