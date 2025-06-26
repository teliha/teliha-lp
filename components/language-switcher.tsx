"use client"

import { useLanguage } from "@/hooks/use-language"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-md p-2">
        <Globe className="text-cyan-400 w-4 h-4" />
        <div className="flex text-xs">
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-1 rounded-l-sm transition-colors ${
              language === "en" ? "bg-cyan-400 text-black font-medium" : "text-cyan-400 hover:bg-cyan-400/20"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("jp")}
            className={`px-2 py-1 rounded-r-sm transition-colors ${
              language === "jp" ? "bg-cyan-400 text-black font-medium" : "text-cyan-400 hover:bg-cyan-400/20"
            }`}
          >
            JP
          </button>
        </div>
      </div>
    </div>
  )
}
