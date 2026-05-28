import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AppText } from "./AppText";
import { colors, spacing } from "../constants/theme";

export default function Input({ label, value, onChangeText, keyboardType = "default", multiline = false, placeholder }) {
  return (
    <View style={styles.wrap}>
      <AppText small muted>{label}</AppText>
      <TextInput
        value={String(value ?? "")}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={[styles.input, multiline && styles.multiline]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.sm },
  input: { marginTop: 5, minHeight: 46, borderRadius: 8, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.surface2, color: colors.text, paddingHorizontal: spacing.md },
  multiline: { minHeight: 88, paddingTop: spacing.sm, textAlignVertical: "top" },
});
