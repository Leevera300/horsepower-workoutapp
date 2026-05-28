import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { colors, spacing } from "../constants/theme";

export default function Button({ title, onPress, variant = "primary", style }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, styles[variant], pressed && styles.pressed, style]}>
      <AppText style={styles.label}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { minHeight: 46, borderRadius: 8, alignItems: "center", justifyContent: "center", paddingHorizontal: spacing.md, marginVertical: spacing.xs },
  primary: { backgroundColor: colors.accent2 },
  secondary: { backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.line },
  gold: { backgroundColor: colors.accent },
  pressed: { opacity: 0.8 },
  label: { fontWeight: "800", color: colors.text },
});
