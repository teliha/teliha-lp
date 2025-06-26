"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Home, Code, Users, Presentation, Newspaper } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 })

  // ボタンの位置を取得して、ドロップダウンメニューの位置を設定
  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setButtonPosition({
        top: rect.bottom,
        left: rect.left,
      })
    }

    // リサイズ時にも位置を更新
    const handleResize = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setButtonPosition({
          top: rect.bottom,
          left: rect.left,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const routes = [
    {
      name: language === "en" ? "HOME" : "ホーム",
      path: "/",
      icon: <Home size={16} />,
    },
    {
      name: language === "en" ? "NEWS" : "ニュース",
      path: "/news",
      icon: <Newspaper size={16} />,
    },
    {
      name: language === "en" ? "PRODUCTS" : "プロダクト",
      path: "/tech",
      icon: <Code size={16} />,
    },
    {
      name: language === "en" ? "TEAM" : "チーム",
      path: "/team",
      icon: <Users size={16} />,
    },
    {
      name: language === "en" ? "DECK" : "デッキ",
      path: "/deck",
      icon: <Presentation size={16} />,
    },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById("mobile-dropdown")
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="flex items-center space-x-1 px-3 py-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-md text-white/70 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
        aria-label="Navigation Menu"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
        <span className="text-sm font-medium">MENU</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          id="mobile-dropdown"
          style={{
            position: "fixed",
            top: `${buttonPosition.top + 8}px`, // ボタンの下に少し余白を持たせる
            left: `${buttonPosition.left}px`,
          }}
          className="z-50 w-64 bg-black/90 backdrop-blur-md border border-cyan-400/20 rounded-md shadow-lg shadow-cyan-400/5 overflow-hidden"
        >
          <div className="py-2">
            {routes.map((route) => {
              const isActive = pathname === route.path

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  target={route.path === "/deck" ? "_blank" : undefined}
                  rel={route.path === "/deck" ? "noopener noreferrer" : undefined}
                >
                  <div
                    className={`flex items-center space-x-3 px-6 py-3 whitespace-nowrap ${
                      isActive
                        ? "bg-cyan-400/10 border-l-2 border-cyan-400 text-cyan-400"
                        : "hover:bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="w-5 flex-shrink-0">{route.icon}</span>
                    <span className="text-sm font-medium">{route.name}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
