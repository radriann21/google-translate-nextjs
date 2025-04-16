"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { LanguageReducer } from "./LanguageReducer";
import { AUTO_LANGUAGE, Language, LanguageActionType, LanguageContextType } from "../types";

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

const initialState: LanguageContextType = {
  from_language: "en",
  to_language: "es",
  textToTranslate: "",
  translatedText: "",
  handleSetFromLanguage: () => {},
  handleSetToLanguage: () => {},
  handleSwitchLanguages: () => {},
  handleSetTextToTranslate: () => {},
  handleSetTranslatedText: () => {},
  handleCopyText: () => {},
  handleSpeech: () => {}
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);

  const handleSetFromLanguage = (language: Language | typeof AUTO_LANGUAGE) => {
    dispatch({
      type: LanguageActionType.SetFromLanguage,
      payload: language,
    });
  };

  const handleSetToLanguage = (language: Language) => {
    dispatch({
      type: LanguageActionType.SetToLanguage,
      payload: language,
    });
  };

  const handleSwitchLanguages = () => {
    if (state.from_language === AUTO_LANGUAGE) return;
    dispatch({
      type: LanguageActionType.SwitchLanguages,
    });
  };

  const handleSetTextToTranslate = (text: string) => {
    dispatch({
      type: LanguageActionType.SetTextToTranslate,
      payload: text
    })
  }

  const handleSetTranslatedText = (text: string) => {
    dispatch({
      type: LanguageActionType.SetTranslatedText,
      payload: text
    })
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(state.translatedText)
  }

  const handleSpeech = () => {
    if (state.translatedText == '') return
    const utterance = new SpeechSynthesisUtterance(state.translatedText)
    speechSynthesis.speak(utterance)
  }

  const value: LanguageContextType = {
    ...state,
    handleSetFromLanguage,
    handleSetToLanguage,
    handleSwitchLanguages,
    handleSetTextToTranslate,
    handleSetTranslatedText,
    handleCopyText,
    handleSpeech
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};
