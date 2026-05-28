import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../constants/theme";
import { useApp } from "../context/AppContext";
import WelcomeScreen from "../screens/WelcomeScreen";
import LanguageSelectScreen from "../screens/LanguageSelectScreen";
import ProfileSetupScreen from "../screens/ProfileSetupScreen";
import DashboardScreen from "../screens/DashboardScreen";
import WorkoutLogScreen from "../screens/WorkoutLogScreen";
import AddWorkoutScreen from "../screens/AddWorkoutScreen";
import WorkoutSummaryScreen from "../screens/WorkoutSummaryScreen";
import StatsDetailScreen from "../screens/StatsDetailScreen";
import RecordsScreen from "../screens/RecordsScreen";
import MuscleMapScreen from "../screens/MuscleMapScreen";
import CharacterScreen from "../screens/CharacterScreen";
import MedalShopScreen from "../screens/MedalShopScreen";
import RankingsScreen from "../screens/RankingsScreen";
import AICoachScreen from "../screens/AICoachScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const navTheme = { ...DarkTheme, colors: { ...DarkTheme.colors, background: colors.bg, card: colors.surface, border: colors.line, text: colors.text, primary: colors.accent } };

export default function RootNavigator() {
  const { user, t } = useApp();
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.bg }, headerTintColor: colors.text, contentStyle: { backgroundColor: colors.bg } }}>
        {!user ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Language" component={LanguageSelectScreen} options={{ title: t("language") }} />
            <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} options={{ title: t("profileSetup") }} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
            <Stack.Screen name="AddWorkout" component={AddWorkoutScreen} options={{ title: t("addWorkout") }} />
            <Stack.Screen name="WorkoutSummary" component={WorkoutSummaryScreen} options={{ title: t("workoutSummary") }} />
            <Stack.Screen name="StatsDetail" component={StatsDetailScreen} options={{ title: t("stats") }} />
            <Stack.Screen name="Records" component={RecordsScreen} options={{ title: t("records") }} />
            <Stack.Screen name="MuscleMap" component={MuscleMapScreen} options={{ title: t("muscleMap") }} />
            <Stack.Screen name="MedalShop" component={MedalShopScreen} options={{ title: t("medalShop") }} />
            <Stack.Screen name="AICoach" component={AICoachScreen} options={{ title: t("aiCoach") }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t("settings") }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs() {
  const { t } = useApp();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size }) => <Ionicons name={iconFor(route.name)} color={color} size={size} />,
      })}
    >
      <Tabs.Screen name="Dashboard" component={DashboardScreen} options={{ title: t("dashboard") }} />
      <Tabs.Screen name="WorkoutLog" component={WorkoutLogScreen} options={{ title: t("log") }} />
      <Tabs.Screen name="Stats" component={StatsHubScreen} options={{ title: t("stats") }} />
      <Tabs.Screen name="Rankings" component={RankingsScreen} options={{ title: t("rankings") }} />
      <Tabs.Screen name="Character" component={CharacterScreen} options={{ title: t("character") }} />
    </Tabs.Navigator>
  );
}

function StatsHubScreen(props) {
  return <StatsDetailScreen {...props} route={{ ...props.route, params: { statKey: "overall" } }} />;
}

function iconFor(name) {
  return { Dashboard: "speedometer", WorkoutLog: "barbell", Stats: "stats-chart", Rankings: "trophy", Character: "person-circle" }[name] || "ellipse";
}
