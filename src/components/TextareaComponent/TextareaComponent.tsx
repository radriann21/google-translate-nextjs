"use client"
import { Textarea } from "@/components/ui/textarea"
import { TextareaType } from "@/types"
import { Button } from "@/components/ui/button"
import { Copy, Speech } from "lucide-react"
import { useLanguageContext } from "@/context/LanguageContext"

interface Props {
  type: TextareaType;
  value: string;
  onChange: (value: string) => void;
  className: string;
  disabled?: boolean;
  loading?: boolean;
}

export const TextareaComponent = ({ type, value, onChange, className, disabled, loading }: Props) => {

  const { translatedText, handleCopyText, handleSpeech } = useLanguageContext();

  const getPlaceholder = ({ type, loading }: { type: TextareaType, loading?: boolean }) => {
    if (loading === true) return 'Loading...'
    if (type === TextareaType.From) return 'Write text...'
    if (!loading && type === TextareaType.To) return 'Translation'
  }
  
  return (
    <>
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={getPlaceholder({ type, loading })}
      className={className}
      autoFocus={type === TextareaType.To ? false : true}
      maxLength={2000}
      ></Textarea>
      {
        type === TextareaType.From && (
          <span className="text-xs mt-1 text-slate-500">{value.length}/2000</span>
        ) 
      }
      {
        type === TextareaType.To && (
          <div className="flex items-center space-x-1 mt-1">
            <Button className="w-fit cursor-pointer" variant="ghost" onClick={handleCopyText}>
              <Copy className="h-3 w-3" />
            </Button>
            <Button onClick={handleSpeech} className="w-fit cursor-pointer" variant="ghost" disabled={translatedText === ''}>
              <Speech className="h-3 w-3" />
            </Button>
          </div>
        )
      }
    </>
  )  
}