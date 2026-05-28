import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";

export default function LanguageSelectScreen({ navigation }) {
  const { language, setLanguage, t } = useApp();
  return (
    <Screen>
      <AppText title>{t("language")}</AppText>
      <Card>
        <AppText muted>{language === "en" ? "English" : "한국어"}</AppText>
        <Button title="English" variant={language === "en" ? "gold" : "secondary"} onPress={() => setLanguage("en")} />
        <Button title="한국어" variant={language === "ko" ? "gold" : "secondary"} onPress={() => setLanguage("ko")} />
      </Card>
      <Button title={t("continue")} onPress={() => navigation.navigate("ProfileSetup")} />
    </Screen>
  );
}
