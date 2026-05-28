import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import Button from "../components/Button";
import { AppText } from "../components/AppText";
import { colors } from "../constants/theme";
import { useApp } from "../context/AppContext";

export default function CharacterScreen({ navigation }) {
  const { user, characterItems, character, equipItem, t } = useApp();
  const owned = characterItems.filter((item) => item.owned);
  return (
    <Screen>
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("currentPreview")}</AppText>
        <AppText style={styles.avatar}>◆ HP ◆</AppText>
        <AppText style={styles.gold}>{t("medalBalance")}: {user?.medals || 0}</AppText>
      </Card>
      <Button title={t("medalShop")} onPress={() => navigation.navigate("MedalShop")} />
      <Card>
        <AppText style={{ fontWeight: "900" }}>{t("ownedItems")}</AppText>
        {owned.map((item) => {
          const equipped = Object.values(character).includes(item.id);
          return <Button key={item.id} title={`${item.name} · ${equipped ? t("equipped") : t("equip")}`} variant={equipped ? "gold" : "secondary"} onPress={() => equipItem(item)} />;
        })}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  avatar: { color: colors.accent, fontSize: 38, textAlign: "center", marginVertical: 24, fontWeight: "900" },
  gold: { color: colors.accent, fontWeight: "800" },
});
