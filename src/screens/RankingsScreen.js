import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { AppText } from "../components/AppText";
import { mockLeaderboard, weightClasses, ageGroups } from "../data/exercises";
import { useApp } from "../context/AppContext";

const categories = ["benchPress", "squat", "deadlift", "averageRunningPace", "weeklyRunningDistance", "longestRun", "workoutStreak", "totalWeeklyVolume"];

export default function RankingsScreen() {
  const { t } = useApp();
  const [category, setCategory] = useState("benchPress");
  const [gender, setGender] = useState("All");
  const [weightClass, setWeightClass] = useState("All");
  const [ageGroup, setAgeGroup] = useState("All");
  const rows = useMemo(() => mockLeaderboard
    .filter((row) => gender === "All" || row.gender === gender)
    .filter((row) => weightClass === "All" || row.weightClass === weightClass)
    .filter((row) => ageGroup === "All" || row.ageGroup === ageGroup)
    .sort((a, b) => category === "averageRunningPace" ? a[category] - b[category] : b[category] - a[category]), [category, gender, weightClass, ageGroup]);
  return (
    <Screen>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("filter")}</AppText>
        <View style={styles.chips}>{categories.map((item) => <Button key={item} title={t(item)} variant={category === item ? "gold" : "secondary"} onPress={() => setCategory(item)} style={styles.chip} />)}</View>
        <View style={styles.chips}>{["All", "Male", "Female"].map((item) => <Button key={item} title={item} variant={gender === item ? "gold" : "secondary"} onPress={() => setGender(item)} style={styles.chip} />)}</View>
        <View style={styles.chips}>{weightClasses.slice(0, 5).map((item) => <Button key={item} title={item} variant={weightClass === item ? "gold" : "secondary"} onPress={() => setWeightClass(item)} style={styles.chip} />)}</View>
        <View style={styles.chips}>{ageGroups.slice(0, 5).map((item) => <Button key={item} title={item} variant={ageGroup === item ? "gold" : "secondary"} onPress={() => setAgeGroup(item)} style={styles.chip} />)}</View>
      </Card>
      {rows.map((row, index) => (
        <Card key={row.id}>
          <AppText style={{ fontWeight: "900" }}>#{index + 1} {row.name}</AppText>
          <AppText muted>{row.gender} - {row.weightClass} - {row.ageGroup}</AppText>
          <AppText>{t(category)}: {row[category]}</AppText>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 8 },
  chip: { minHeight: 36, marginVertical: 0 },
});
