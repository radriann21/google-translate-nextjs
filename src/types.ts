export const AUTO_LANGUAGE = "auto";
export type Language = "en" | "es" | typeof AUTO_LANGUAGE;

export enum LanguageActionType {
  SetFromLanguage = 'setFromLanguage',
  SetToLanguage = 'setToLanguage',
  SwitchLanguages = 'switchLanguages'
}

export type LanguageAction = {
  type: LanguageActionType;
  payload?: Language | typeof AUTO_LANGUAGE;
};

export type LanguageState = {
  from_language: Language | typeof AUTO_LANGUAGE;
  to_language: Language | typeof AUTO_LANGUAGE;
};

export type LanguageContextType = LanguageState & {
  handleSetFromLanguage: (language: Language | typeof AUTO_LANGUAGE) => void;
  handleSetToLanguage: (language: Language) => void;
  handleSwitchLanguages: () => void;
};