import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";

export default function SettingsScreen() {
  const { language, setLanguage, medalTransactions, reset, t } = useApp();
  return (
    <Screen>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("language")}</AppText>
        <Button title="English" variant={language === "en" ? "gold" : "secondary"} onPress={() => setLanguage("en")} />
        <Button title="한국어" variant={language === "ko" ? "gold" : "secondary"} onPress={() => setLanguage("ko")} />
      </Card>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("transactionHistory")}</AppText>
        {medalTransactions.map((tx) => <AppText key={tx.id}>{tx.amount > 0 ? "+" : ""}{tx.amount} · {tx.reason}</AppText>)}
        {!medalTransactions.length && <AppText muted>No medal transactions yet.</AppText>}
      </Card>
      <Button title={t("resetDemo")} variant="secondary" onPress={reset} />
    </Screen>
  );
}
