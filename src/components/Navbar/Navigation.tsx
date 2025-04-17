import { Button } from "../ui/button";
import { Moon } from "lucide-react";
import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="w-full border-b-1 border-slate-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl font-geist-sans">Translate Clone</h1>

        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/radriann21/google-translate-nextjs"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              className="border-1 border-slate-300 cursor-pointer"
            >
              See Code
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
