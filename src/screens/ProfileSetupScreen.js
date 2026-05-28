import React, { useState } from "react";
import Screen from "../components/Screen";
import Input from "../components/Input";
import Button from "../components/Button";
import { useApp } from "../context/AppContext";

export default function ProfileSetupScreen() {
  const { saveProfile, t } = useApp();
  const [profile, setProfile] = useState({ name: "", gender: "", age: "", height: "", weight: "", goal: "", trainingExperience: "", availableEquipment: "" });
  const set = (key, value) => setProfile((current) => ({ ...current, [key]: value }));
  return (
    <Screen>
      <Input label={t("name")} value={profile.name} onChangeText={(v) => set("name", v)} />
      <Input label={t("gender")} value={profile.gender} onChangeText={(v) => set("gender", v)} />
      <Input label={t("age")} value={profile.age} onChangeText={(v) => set("age", v)} keyboardType="numeric" />
      <Input label={t("height")} value={profile.height} onChangeText={(v) => set("height", v)} keyboardType="numeric" />
      <Input label={t("weight")} value={profile.weight} onChangeText={(v) => set("weight", v)} keyboardType="numeric" />
      <Input label={t("goal")} value={profile.goal} onChangeText={(v) => set("goal", v)} />
      <Input label={t("trainingExperience")} value={profile.trainingExperience} onChangeText={(v) => set("trainingExperience", v)} />
      <Input label={t("availableEquipment")} value={profile.availableEquipment} onChangeText={(v) => set("availableEquipment", v)} />
      <Button title={t("saveProfile")} onPress={() => saveProfile(profile)} />
    </Screen>
  );
}
