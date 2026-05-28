import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import { AppText } from "../components/AppText";
import Button from "../components/Button";
import { colors } from "../constants/theme";
import { useApp } from "../context/AppContext";

export default function WelcomeScreen({ navigation }) {
  const { t } = useApp();
  return (
    <Screen scroll={false}>
      <View style={styles.hero}>
        <View style={styles.mark}><AppText style={styles.hp}>HP</AppText></View>
        <AppText title style={styles.title}>{t("welcomeTitle")}</AppText>
        <AppText style={styles.marks}>{t("appMarks")}</AppText>
        <AppText muted style={styles.subtitle}>{t("welcomeSubtitle")}</AppText>
        <Button title={t("getStarted")} onPress={() => navigation.navigate("Language")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { flex: 1, justifyContent: "center", padding: 24 },
  mark: { width: 92, height: 92, borderRadius: 8, backgroundColor: colors.accent2, alignItems: "center", justifyContent: "center", marginBottom: 20 },
  hp: { fontSize: 34, fontWeight: "900" },
  title: { fontSize: 42, lineHeight: 48 },
  marks: { color: colors.accent, fontSize: 22, fontWeight: "800", marginTop: 4 },
  subtitle: { marginVertical: 24, fontSize: 17 },
});
