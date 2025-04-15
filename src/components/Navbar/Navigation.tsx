import { Button } from "../ui/button"
import { Moon } from "lucide-react"

export const Navigation = () => {
  return (
    <header className="w-full border-b-1 border-slate-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="font-bold text-xl font-geist-sans">Translate Clone</h1>

        <div className="flex items-center space-x-6">
          <Button variant="outline" className="border-1 border-slate-300 cursor-pointer">
            See Code
          </Button>
          <Button variant="ghost" className="cursor-pointer">
            <Moon />
          </Button>
        </div>
      </div> 
    </header>
  )
}