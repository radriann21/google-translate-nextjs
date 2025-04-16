"use client";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useLanguageContext } from "@/context/LanguageContext";

export const useTranslate = ({
  textToTranslate,
  from_language,
  to_language,
}: {
  textToTranslate: string;
  from_language: string;
  to_language: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedTextToTranslate = useDebounce(textToTranslate, 400);
  const { handleSetTranslatedText } = useLanguageContext();

  useEffect(() => {
    if (debouncedTextToTranslate === "") return;

    try {
      setLoading(true);
      fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          textToTranslate: debouncedTextToTranslate,
          fromLanguage: from_language,
          toLanguage: to_language,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          handleSetTranslatedText(data.translatedText);
          setLoading(false);
        });
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }, [debouncedTextToTranslate, from_language, to_language]);

  return {
    loading,
  };
};
