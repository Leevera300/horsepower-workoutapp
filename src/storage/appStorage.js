import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "horsepower.mvp.state";

export async function loadAppState() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function saveAppState(state) {
  await AsyncStorage.setItem(KEY, JSON.stringify(state));
}

export async function clearAppState() {
  await AsyncStorage.removeItem(KEY);
}
