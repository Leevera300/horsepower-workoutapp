import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultCharacterItems } from "../data/exercises";
import { clearAppState, loadAppState, saveAppState } from "../storage/appStorage";
import { calculateMedalsEarned, calculateWorkoutVolume, detectMusclesWorked, detectPersonalRecords, recalculateStats } from "../utils/stats";
import { translate } from "../i18n";

const AppContext = createContext(null);

const initialState = {
  language: "en",
  user: null,
  stats: {
    userId: "local-user",
    strength: 0,
    cardio: 0,
    endurance: 0,
    consistency: 0,
    volume: 0,
    muscleBalance: 0,
    overall: 0,
    updatedAt: new Date().toISOString(),
  },
  workouts: [],
  records: [],
  medalTransactions: [],
  characterItems: defaultCharacterItems,
  character: {
    userId: "local-user",
    equippedShirt: "shirt-iron",
    equippedShorts: "shorts-black",
    equippedShoes: null,
    equippedGloves: null,
    equippedBelt: null,
    equippedBackground: null,
    equippedBadge: null,
  },
  lastSummary: null,
};

export function AppProvider({ children }) {
  const [state, setState] = useState(initialState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadAppState().then((stored) => {
      if (stored) setState({ ...initialState, ...stored });
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (ready) saveAppState(state);
  }, [ready, state]);

  const actions = useMemo(() => ({
    t: (key) => translate(state.language, key),
    setLanguage: (language) => setState((current) => ({ ...current, language })),
    saveProfile: (profile) =>
      setState((current) => ({
        ...current,
        user: {
          id: "local-user",
          language: current.language,
          medals: current.user?.medals || 0,
          createdAt: current.user?.createdAt || new Date().toISOString(),
          ...profile,
        },
      })),
    logWorkout: (draft) => {
      let workout = {
        id: `workout-${Date.now()}`,
        userId: "local-user",
        date: draft.date || new Date().toISOString().slice(0, 10),
        createdAt: new Date().toISOString(),
        notes: draft.notes || "",
        ...draft,
      };
      workout.musclesWorked = detectMusclesWorked(workout.exercises);
      workout.totalVolume = calculateWorkoutVolume(workout);
      const prs = detectPersonalRecords(workout, state.records);
      const medals = calculateMedalsEarned(workout, prs);
      workout.medalsEarned = medals.amount;
      const transactions = medals.reasons.map((reason, index) => ({
        id: `medal-${Date.now()}-${index}`,
        userId: "local-user",
        amount: index === 0 ? 20 : reason.includes("3+") ? 10 : 20,
        reason,
        workoutId: workout.id,
        createdAt: new Date().toISOString(),
      }));
      setState((current) => {
        const workouts = [workout, ...current.workouts];
        const records = [...prs, ...current.records];
        const stats = recalculateStats(workouts, records);
        const user = { ...current.user, medals: (current.user?.medals || 0) + medals.amount };
        return {
          ...current,
          user,
          workouts,
          records,
          stats,
          medalTransactions: [...transactions, ...current.medalTransactions],
          lastSummary: { workout, personalRecords: prs, stats, medals },
        };
      });
      return { workout, personalRecords: prs, medals };
    },
    unlockItem: (itemId) =>
      setState((current) => {
        const item = current.characterItems.find((entry) => entry.id === itemId);
        if (!item || item.owned || (current.user?.medals || 0) < item.price) return current;
        return {
          ...current,
          user: { ...current.user, medals: current.user.medals - item.price },
          characterItems: current.characterItems.map((entry) => (entry.id === itemId ? { ...entry, owned: true } : entry)),
          medalTransactions: [{ id: `shop-${Date.now()}`, userId: "local-user", amount: -item.price, reason: `Unlocked ${item.name}`, workoutId: null, createdAt: new Date().toISOString() }, ...current.medalTransactions],
        };
      }),
    equipItem: (item) =>
      setState((current) => ({
        ...current,
        character: { ...current.character, [`equipped${capitalize(item.type)}`]: item.id },
      })),
    reset: async () => {
      await clearAppState();
      setState(initialState);
    },
  }), [state]);

  return <AppContext.Provider value={{ ...state, ready, ...actions }}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
