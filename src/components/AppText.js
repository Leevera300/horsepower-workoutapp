import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export function AppText({ children, style, muted, title, small }) {
  return <Text style={[styles.text, muted && styles.muted, title && styles.title, small && styles.small, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: { color: colors.text, fontSize: 15, lineHeight: 22 },
  muted: { color: colors.muted },
  title: { fontSize: 26, lineHeight: 32, fontWeight: "800" },
  small: { fontSize: 12, lineHeight: 17 },
});
