import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors, spacing } from "../constants/theme";

export default function Screen({ children, scroll = true }) {
  const Container = scroll ? ScrollView : View;
  return (
    <Container style={styles.screen} contentContainerStyle={scroll ? styles.content : undefined}>
      {children}
    </Container>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.md, paddingBottom: 110 },
});
