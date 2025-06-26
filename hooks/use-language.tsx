"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

interface LanguageContextProps {
  language: "en" | "jp"
  setLanguage: (lang: "en" | "jp") => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "jp">("en")

  useEffect(() => {
    // ローカルストレージから言語設定を読み込む
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage === "en" || storedLanguage === "jp") {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    // 言語設定が変更されたらローカルストレージに保存
    localStorage.setItem("language", language)
  }, [language])

  const value: LanguageContextProps = {
    language,
    setLanguage: (lang: "en" | "jp") => {
      setLanguage(lang)
    },
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
