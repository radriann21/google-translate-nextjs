"use client";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "@/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { useLanguageContext } from "@/context/LanguageContext";

export const TranslatorContainer = () => {
  const {
    from_language,
    handleSetFromLanguage,
    to_language,
    handleSetToLanguage,
    handleSwitchLanguages
  } = useLanguageContext();

  return (
    <main className="max-w-full h-auto flex flex-col items-center justify-center flex-grow">
      <section className="max-w-7xl mx-auto grid grid-cols-7 mt-16">
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
          <Textarea
            placeholder="Write your text..."
            className="mt-2 resize-none w-[380px] h-[120px]"
          ></Textarea>
        </div>
        <div className="col-span-1">
          <Button variant="outline" className="cursor-pointer" onClick={handleSwitchLanguages}>
            <ArrowLeftRight />
          </Button>
          <span>{from_language}</span>
          <span>{to_language}</span>
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
          <Textarea
            className="mt-2 resize-none w-[380px] h-[120px]"
            disabled
            placeholder="Translation"
          ></Textarea>
        </div>
      </section>
    </main>
  );
};
