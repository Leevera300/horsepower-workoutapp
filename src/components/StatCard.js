import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Card from "./Card";
import { AppText } from "./AppText";
import { colors } from "../constants/theme";
import { getDivisionFromStat } from "../utils/stats";

export default function StatCard({ label, value, t, onPress }) {
  const division = getDivisionFromStat(value);
  const content = (
    <Card style={styles.card}>
      <View>
        <AppText muted small>{label}</AppText>
        <AppText style={styles.value}>{value}</AppText>
      </View>
      <View style={styles.badge}>
        <AppText small style={styles.badgeText}>{t(division)}</AppText>
      </View>
    </Card>
  );
  return onPress ? <Pressable onPress={onPress}>{content}</Pressable> : content;
}

const styles = StyleSheet.create({
  card: { minHeight: 96, justifyContent: "space-between" },
  value: { fontSize: 30, fontWeight: "900", marginTop: 4 },
  badge: { alignSelf: "flex-start", backgroundColor: colors.surface2, borderColor: colors.accent, borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { color: colors.accent, fontWeight: "800" },
});
