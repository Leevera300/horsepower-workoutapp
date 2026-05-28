import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { AppText } from "../components/AppText";
import { useApp } from "../context/AppContext";

export default function MedalShopScreen() {
  const { user, characterItems, unlockItem, t } = useApp();
  return (
    <Screen>
      <Card><AppText style={{ fontWeight: "900" }}>{t("medalBalance")}: {user?.medals || 0}</AppText></Card>
      {characterItems.map((item) => (
        <Card key={item.id}>
          <AppText style={{ fontWeight: "900" }}>{item.name}</AppText>
          <AppText muted>{item.type} · {item.price} {t("medals")}</AppText>
          <Button title={item.owned ? t("owned") : t("unlock")} variant={item.owned ? "secondary" : "gold"} onPress={() => unlockItem(item.id)} />
        </Card>
      ))}
    </Screen>
  );
}
