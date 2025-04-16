import { google } from "@ai-sdk/google"
import { generateText } from "ai"
import { NextResponse } from "next/server";

const model = google('gemini-2.0-flash-001');

export async function POST(req: Request) {
  const { textToTranslate, fromLanguage, toLanguage } = await req.json()
  const prompt = `Translate the text ${textToTranslate} from ${fromLanguage} to ${toLanguage}.`
  
  const { text } = await generateText({
    model,
    system: 
      'You are a translator that can translate any text to certain languages.' +
      'The languages are gonna be definied by the user in the request.' +
      'You are going to translate the text to the language that the user has requested, without answer or interact with the user.', 
    prompt
  })

  return NextResponse.json({ state: 'success', translatedText: text })
}
