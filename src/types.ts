export const AUTO_LANGUAGE = "auto";
export type Language = "en" | "es" | typeof AUTO_LANGUAGE;

export enum LanguageActionType {
  SetFromLanguage = 'setFromLanguage',
  SetToLanguage = 'setToLanguage',
  SwitchLanguages = 'switchLanguages',
  SetTextToTranslate = 'setTextToTranslate',
  SetTranslatedText = 'setTranslatedText'
}

export type LanguageAction =
  | { type: LanguageActionType.SetFromLanguage; payload: Language | typeof AUTO_LANGUAGE }
  | { type: LanguageActionType.SetToLanguage; payload: Language }
  | { type: LanguageActionType.SwitchLanguages }
  | { type: LanguageActionType.SetTextToTranslate; payload: string }
  | { type: LanguageActionType.SetTranslatedText; payload: string };

export type LanguageState = {
  from_language: Language | typeof AUTO_LANGUAGE;
  to_language: Language;
  textToTranslate: string;
  translatedText: string;
};

export type LanguageContextType = LanguageState & {
  handleSetFromLanguage: (language: Language | typeof AUTO_LANGUAGE) => void;
  handleSetToLanguage: (language: Language) => void;
  handleSwitchLanguages: () => void;
  handleSetTextToTranslate: (text: string) => void;
  handleSetTranslatedText: (text: string) => void;
  handleCopyText: () => void;
  handleSpeech: () => void;
};

export enum TextareaType {
  From = 'from',
  To = 'to'
}