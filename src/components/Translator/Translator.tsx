"use client";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TextareaComponent } from "../TextareaComponent/TextareaComponent";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";
import { TextareaType } from "@/types";
import { useTranslate } from "@/hooks/useTranslate";

export const Translator = () => {
  const {
    textToTranslate,
    from_language,
    to_language,
    translatedText,
    handleSetFromLanguage,
    handleSetToLanguage,
    handleSwitchLanguages,
    handleSetTextToTranslate,
  } = useLanguageContext();

  const { loading } = useTranslate({
    textToTranslate,
    from_language,
    to_language,
  })

  return (
    <>
      <div className="w-full col-span-3 flex flex-col">
        <Select onValueChange={handleSetFromLanguage} value={from_language}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <TextareaComponent
          type={TextareaType.From}
          value={textToTranslate}
          onChange={(value: string) => handleSetTextToTranslate(value)}
          className="mt-2 resize-none w-[380px] h-[120px]"
        />
      </div>
      <div className="col-span-1 flex justify-center">
        <Button
          variant="outline"
          className="cursor-pointer mx-auto"
          onClick={handleSwitchLanguages}
        >
          <ArrowLeftRight />
        </Button>
      </div>
      <div className="w-full col-span-3 flex flex-col">
        <Select onValueChange={handleSetToLanguage} value={to_language}>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(SUPPORTED_LANGUAGES)
              .filter(([key]) => key !== AUTO_LANGUAGE)
              .map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <TextareaComponent
          loading={loading}
          type={TextareaType.To}
          value={translatedText}
          onChange={() => {}}
          className="mt-2 resize-none w-[380px] h-[120px] cursor-none bg-slate-200 border-none placeholder:text-slate-700"
          disabled={true}
        />
      </div>
    </>
  )
}
