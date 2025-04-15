import { AUTO_LANGUAGE } from "@/constants";
import { LanguageAction, LanguageActionType, LanguageState } from "../types";

export const LanguageReducer = (
  state: LanguageState,
  action: LanguageAction
): LanguageState => {
  switch (action.type) {
    case LanguageActionType.SetFromLanguage:
      return {
        ...state,
        from_language: action.payload!,
      };

    case LanguageActionType.SetToLanguage:
      if (action.payload !== AUTO_LANGUAGE) {
        return {
          ...state,
          to_language: action.payload!,
        };
      }
      return state;

      case LanguageActionType.SwitchLanguages:
        if (state.from_language === AUTO_LANGUAGE) {
          return state;
        }
        return {
          ...state,
          from_language: state.to_language,
          to_language: state.from_language,
        };

    default:
      return state;
  }
};
