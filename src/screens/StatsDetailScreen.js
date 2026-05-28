import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import StatCard from "../components/StatCard";
import { AppText } from "../components/AppText";
import Button from "../components/Button";
import { useApp } from "../context/AppContext";
import { getDivisionFromStat, getNextDivision } from "../utils/stats";

const statKeys = ["strength", "cardio", "endurance", "consistency", "volume", "muscleBalance", "overall"];

export default function StatsDetailScreen({ navigation, route }) {
  const { stats, records, t } = useApp();
  const statKey = route.params?.statKey || "overall";
  const score = stats[statKey];
  const next = getNextDivision(score);
  return (
    <Screen>
      <StatCard label={t(statKey)} value={score} t={t} />
      <Card>
        <AppText>{t(statKey)}: {score} ({t(getDivisionFromStat(score))})</AppText>
        <AppText>{t("nextDivision")}: {t(next.key)} at {next.at}</AppText>
        <AppText muted>{Math.max(0, next.at - score)} {t("pointsNeeded")}</AppText>
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("relatedRecords")}</AppText>
        {records.slice(0, 6).map((record) => <AppText key={record.id}>{record.exerciseName}: {record.value} {record.unit}</AppText>)}
        {!records.length && <AppText muted>No records yet.</AppText>}
      </Card>
      {statKeys.map((key) => key !== statKey && <StatCard key={key} label={t(key)} value={stats[key]} t={t} onPress={() => navigation.navigate("StatsDetail", { statKey: key })} />)}
      <Button title={t("records")} variant="secondary" onPress={() => navigation.navigate("Records")} />
      <Button title={t("muscleMap")} variant="secondary" onPress={() => navigation.navigate("MuscleMap")} />
    </Screen>
  );
}
