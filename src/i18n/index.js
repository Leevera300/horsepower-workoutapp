import en from "./en";
import ko from "./ko";

const dictionaries = { en, ko };

export function translate(language, key) {
  return dictionaries[language]?.[key] || dictionaries.en[key] || key;
}

export function getDictionary(language) {
  return dictionaries[language] || dictionaries.en;
}
