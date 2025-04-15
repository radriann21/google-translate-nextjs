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
  handleSetFromLanguage: () => {},
  handleSetToLanguage: () => {},
  handleSwitchLanguages: () => {},
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

  const value: LanguageContextType = {
    ...state,
    handleSetFromLanguage,
    handleSetToLanguage,
    handleSwitchLanguages,
  };

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
