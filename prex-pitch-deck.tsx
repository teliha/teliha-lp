"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronUp, Users, TrendingUp, Target, DollarSign, Rocket, Award } from "lucide-react"
import { useMobile } from "./hooks/use-mobile"

// コンポーネントの最初に追加
export function PrexPitchDeck() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const isMobile = useMobile()

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    setShowScrollTop(scrollPosition > windowHeight * 0.5)
  }

  useEffect(() => {
    // 初期状態を設定
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // モバイルの場合は警告画面を表示
  if (isMobile) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-3xl">💻</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Desktop Required</h1>
            <p className="text-gray-300 mb-6">
              This presentation deck is optimized for desktop viewing. Please access from a desktop or laptop computer
              for the best experience.
            </p>
            <div className="text-sm text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-4">
              このプレゼンテーションデッキはデスクトップ表示用に最適化されています。最適な体験のため、デスクトップまたはラップトップからアクセスしてください。
            </div>
          </div>
          <button
            onClick={() => window.close()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-colors"
          >
            Close Tab / タブを閉じる
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Floating Navigation */}
      <div className="fixed top-4 right-4 z-50">
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
          >
            <ChevronUp className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
              PREX
            </h1>
            <div className="text-2xl md:text-3xl text-white font-light mb-8 tracking-wide">
              Programmable Finance Infrastructure
            </div>
            <div className="text-lg md:text-xl text-cyan-300 font-mono border border-cyan-500/30 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
              {"> Replace legacy payment rails with crypto-native architecture"}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50" />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Card className="bg-black/60 backdrop-blur-md border border-red-500/30 shadow-2xl shadow-red-500/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
                <h2 className="text-3xl font-bold text-red-400">PROBLEM</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg font-semibold text-white">
                  Modern applications can't directly access financial infrastructure.
                </p>
                <p className="text-base">
                  Clearing, settlement, issuance, and transfers are still built on legacy rails like SWIFT, FIX, and
                  proprietary banking APIs.
                </p>
                <p className="text-base">
                  Even basic payment use cases require licenses, intermediaries, and high costs — especially in Japan
                  and Asia.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/60 backdrop-blur-md border border-green-500/30 shadow-2xl shadow-green-500/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h2 className="text-3xl font-bold text-green-400">SOLUTION</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg font-semibold text-cyan-300">
                  Prex provides crypto-native rails to replace legacy financial backends.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p>Send & receive assets in-app, gasless and instant</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p>Issue tokens with embedded economics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <p>One SDK, compatible with any EVM chain</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <blockquote className="text-center">
                    <p className="text-green-300 font-semibold mb-2">"Just like Stripe made card payments trivial,"</p>
                    <p className="text-white font-bold">"Prex makes programmable finance accessible."</p>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market & TAM */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingUp className="w-12 h-12 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Market & Total Addressable Market (TAM)</h2>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              $300B
            </div>
            <p className="text-xl text-white font-semibold">Crypto as backend infrastructure for finance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="space-y-3">
                {[
                  {
                    from: "Securities settlement",
                    to: "programmable tokens",
                    colorClass: "border-cyan-500/20",
                    textClass: "text-cyan-400",
                  },
                  {
                    from: "Retail payments",
                    to: "low-cost, gasless transfers",
                    colorClass: "border-purple-500/20",
                    textClass: "text-purple-400",
                  },
                  {
                    from: "Futures & FX",
                    to: "on-chain execution & clearing",
                    colorClass: "border-pink-500/20",
                    textClass: "text-pink-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 bg-black/30 backdrop-blur-sm border ${item.colorClass} rounded-lg p-3`}
                  >
                    <div className="text-gray-300 flex-1">{item.from}</div>
                    <div className="text-gray-500">→</div>
                    <div className={`${item.textClass} font-semibold flex-1`}>{item.to}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-black/80 backdrop-blur-md border border-orange-500/50 shadow-2xl shadow-orange-500/20">
                <CardContent className="p-6">
                  <p className="text-white text-lg mb-4 font-semibold">
                    Japan and Southeast Asia are still running on outdated rails.
                  </p>
                  <p className="text-orange-200 font-bold text-lg">
                    Prex provides the SDK layer to build these new primitives – now.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
                <CardContent className="p-6">
                  <blockquote className="text-center">
                    <p className="text-xl font-bold text-cyan-300 mb-2">"This is not about speculation."</p>
                    <p className="text-lg text-white">It's about replacing SWIFT, FIX, and clearinghouses.</p>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target className="w-12 h-12 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Value Proposition & Positioning</h2>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl text-cyan-300 font-semibold mb-4">
              Prex empowers developers to embed crypto-native financial flows —
            </p>
            <p className="text-lg text-white">
              without relying on centralized custodians like Coinbase or banking APIs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              {[
                "Works with any EVM-compatible chain or token",
                "Gasless transfers, programmable issuance, off-chain UX",
                "Lightweight SDK, embeddable in hours",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-md border border-purple-500/30 shadow-2xl">
                <CardContent className="p-6">
                  <blockquote className="text-center">
                    <p className="text-xl font-bold text-purple-300 mb-4">
                      "Prex = Infrastructure for programmable finance"
                    </p>
                    <p className="text-lg text-white">— for the builders who don't want to wait for banks.</p>
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Positioning</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-sm">
                      Unlike Coinbase SDKs or Stripe Crypto integrations, Prex targets developers building niche, agile
                      apps —
                    </p>
                    <p className="text-cyan-300 font-semibold">
                      sports, creator tools, localized rewards, digital ticketing.
                    </p>
                    <p className="text-white font-bold">
                      Prex wins where others are too slow, too heavy, or too rigid.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <DollarSign className="w-12 h-12 text-green-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Business & Revenue Model</h2>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl text-green-300 font-semibold">
              Prex combines infrastructure revenue with scalable SaaS pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Monetization */}
            <Card className="bg-black/60 backdrop-blur-md border border-green-500/30 shadow-2xl shadow-green-500/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <h3 className="text-2xl font-bold text-green-400">Current Monetization</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-green-300 mb-2">White-label deployments</h4>
                    <p className="text-gray-300 text-sm">(e.g. FCRApp)</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-green-300 mb-2">Custom wallet development & integration</h4>
                    <p className="text-gray-300 text-sm">Custom development contracts</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-green-300 mb-2">Transaction processing</h4>
                    <p className="text-gray-300 text-sm">Volume-based fee</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Planned SaaS Model */}
            <Card className="bg-black/60 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                  <h3 className="text-2xl font-bold text-cyan-400">Planned SaaS Model</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-cyan-300 mb-2">Monthly base</h4>
                    <p className="text-white font-semibold">From $20/month</p>
                    <p className="text-gray-300 text-sm">Subscription foundation</p>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-cyan-300 mb-2">Transaction fees</h4>
                    <p className="text-white font-semibold">$0.02-0.08 per transaction</p>
                    <p className="text-gray-300 text-sm">Scalable pricing model</p>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-bold text-cyan-300 mb-2">Application-based pricing</h4>
                    <p className="text-gray-300 text-sm">for enterprise clients</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Go-to-Market */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Rocket className="w-12 h-12 text-orange-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Go-to-Market Strategy</h2>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-xl text-orange-300 font-semibold mb-4">Prex starts where others can't: Japan.</p>
            <div className="max-w-3xl mx-auto space-y-3 text-gray-300">
              <p className="text-lg">
                We've built and deployed gasless token systems with real institutions in Japan's highly-regulated
                market.
              </p>
              <p className="text-lg font-semibold text-orange-200">
                From this foundation, we expand across Asia with proven regulatory expertise.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phase 1: Japan Foundation */}
            <Card className="bg-black/60 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-cyan-400">🇯🇵</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">Phase 1: Japan Foundation (2024-2025)</h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-3">
                    <p className="text-cyan-300 font-semibold text-sm">White-label Deployments</p>
                    <p className="text-gray-300 text-xs">FCRApp, retail wallets, live events</p>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-3">
                    <p className="text-cyan-300 font-semibold text-sm">Developer Portal Launch</p>
                    <p className="text-gray-300 text-xs">Self-serve SDK integration</p>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-3">
                    <p className="text-cyan-300 font-semibold text-sm">SaaS Transition</p>
                    <p className="text-gray-300 text-xs">Usage-based billing model</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2: Asia Expansion */}
            <Card className="bg-black/60 backdrop-blur-md border border-purple-500/30 shadow-2xl shadow-purple-500/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-400">🌏</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">Phase 2: Asia Expansion (2026+)</h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3">
                    <p className="text-purple-300 font-semibold text-sm">Hong Kong, Singapore, Indonesia</p>
                    <p className="text-gray-300 text-xs">Leverage regulatory expertise</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3">
                    <p className="text-purple-300 font-semibold text-sm">Regional Partnerships</p>
                    <p className="text-gray-300 text-xs">Local SaaS & wallet providers</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3">
                    <p className="text-purple-300 font-semibold text-sm">Platform Leadership</p>
                    <p className="text-gray-300 text-xs">Default choice for embedded finance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12 text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Traction – KPI Metrics & Milestones</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* FCRApp */}
            <Card className="bg-black/80 backdrop-blur-md border border-green-500/30 shadow-2xl shadow-green-500/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">FCRApp (FC Ryukyu × GMO Coin)</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-200 font-semibold">Live Production</span>
                      <span className="text-white font-bold">Since Nov 2024</span>
                    </div>
                  </div>

                  <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-200 font-semibold">Cumulative Transactions</span>
                      <span className="text-cyan-300 font-bold text-xl">4,000+</span>
                    </div>
                  </div>

                  <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-200 font-semibold">Stadium Launch Event</span>
                      <span className="text-white font-bold">5,000+ distributions</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-gray-300 text-sm">
                  <p>• Commercial contract: multi-month, revenue-generating</p>
                </div>
              </CardContent>
            </Card>

            {/* Pass0 & Custom Wallet */}
            <div className="space-y-8">
              <Card className="bg-black/60 backdrop-blur-md border border-purple-500/30 shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">Pass0 Pilot Deployment</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-300 text-sm">Monthly Transactions</span>
                        <span className="text-white font-bold">~200 & growing</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">Embedded finance use case (retail store)</p>
                    <p className="text-purple-300 text-sm font-semibold">
                      First example of localized, branded token flows
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-md border border-cyan-500/30 shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400">Custom Wallet Infra Deployment</h3>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm">Delivered to a commerce client</p>
                    <p className="text-cyan-300 text-sm font-semibold">
                      Proven ability to integrate programmable finance into real-world apps
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingUp className="w-12 h-12 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Forecast (2025–2026)</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* 2025 Goals */}
            <Card className="bg-black/80 backdrop-blur-md border border-blue-500/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h3 className="text-3xl font-bold text-blue-400">2025 Goals</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-black/40 border border-blue-500/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 font-semibold">5+ new production deployments</p>
                      <p className="text-gray-300 text-sm">Scale white-label partnerships</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-black/40 border border-blue-500/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 font-semibold">20,000+ cumulative transactions</p>
                      <p className="text-gray-300 text-sm">5x growth from current volume</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-black/40 border border-blue-500/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 font-semibold">Achieve 6-figure annual run rate</p>
                      <p className="text-gray-300 text-sm">Sustainable revenue foundation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2026 Vision */}
            <Card className="bg-black/80 backdrop-blur-md border border-purple-500/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-3xl font-bold text-purple-400">2026 Vision</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-black/40 border border-purple-500/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-purple-200 font-semibold">Over 100,000 transactions handled via Prex</p>
                      <p className="text-gray-300 text-sm">25x growth from 2024 baseline</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-black/40 border border-purple-500/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-purple-200 font-semibold">Majority revenue from SaaS & Tx volume</p>
                      <p className="text-gray-300 text-sm">Recurring revenue model dominance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-black/40 border border-purple-500/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-purple-200 font-semibold">Expansion into Southeast Asia</p>
                      <p className="text-gray-300 text-sm">Beginning with Indonesia market</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Trajectory */}
          <Card className="bg-gradient-to-br from-orange-900/50 to-yellow-900/50 backdrop-blur-md border border-orange-500/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-orange-400 rounded-full" />
                <h3 className="text-2xl font-bold text-orange-400">Growth Trajectory</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-300 mb-2">4K+</div>
                  <div className="text-gray-300 text-sm">2024 Transactions</div>
                  <div className="text-cyan-400 text-xs">Current baseline</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">20K+</div>
                  <div className="text-gray-300 text-sm">2025 Target</div>
                  <div className="text-blue-400 text-xs">5x growth</div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">100K+</div>
                  <div className="text-gray-300 text-sm">2026 Vision</div>
                  <div className="text-purple-400 text-xs">25x growth</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Users className="w-12 h-12 text-indigo-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Team</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Shuhei Hiya",
                role: "CEO",
                desc: "MITOU Program Super Creator, Kyushu Univ. Web3 infra & design visionary.",
                color: "cyan",
                image: "/images/shuhei-avatar.png",
                twitter: "@syuhei176",
              },
              {
                name: "Noriaki Ibe",
                role: "COO",
                desc: "Former Director, Indonesian Futures Clearing House. Regulatory and financial infrastructure expert.",
                color: "purple",
                image: "/images/ibe-avatar.png",
                twitter: "@ibeibe__",
              },
              {
                name: "Wataru Shinohara",
                role: "Sr. Engineer",
                desc: 'Author of "Blockchain Application Development Textbook". Veteran full-stack and Solidity engineer.',
                color: "pink",
                image: "/images/wataru-avatar.png",
                twitter: "@shinanonozenji_",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className={`bg-black/60 backdrop-blur-md border shadow-2xl ${
                  member.color === "cyan"
                    ? "border-cyan-500/30 shadow-cyan-500/10"
                    : member.color === "purple"
                      ? "border-purple-500/30 shadow-purple-500/10"
                      : "border-pink-500/30 shadow-pink-500/10"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-cyan-400/20"
                    />
                    <div
                      className={`absolute inset-0 rounded-full ${
                        member.color === "cyan"
                          ? "bg-gradient-to-br from-cyan-400/20 to-cyan-600/20"
                          : member.color === "purple"
                            ? "bg-gradient-to-br from-purple-400/20 to-purple-600/20"
                            : "bg-gradient-to-br from-pink-400/20 to-pink-600/20"
                      }`}
                    ></div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      member.color === "cyan"
                        ? "text-cyan-400"
                        : member.color === "purple"
                          ? "text-purple-400"
                          : "text-pink-400"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p className="text-white font-semibold mb-1">{member.role}</p>
                  <div
                    className={`flex items-center justify-center gap-2 text-sm mb-3 ${
                      member.color === "cyan"
                        ? "text-cyan-300"
                        : member.color === "purple"
                          ? "text-purple-300"
                          : "text-pink-300"
                    }`}
                  >
                    <img src="/images/x-logo.svg" alt="X" className="w-3 h-3 filter brightness-0 invert" />
                    <span>{member.twitter}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="h-screen flex items-center justify-center relative snap-start snap-always print:h-auto print:min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              WHAT'S NEXT
            </div>

            <Card className="bg-black/60 backdrop-blur-md border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 mb-6">
              <CardContent className="p-6">
                <div className="space-y-4 text-left">
                  <p className="text-xl text-cyan-300 font-semibold">We're not here to sell hype.</p>
                  <p className="text-xl text-white font-bold">We're bringing infrastructure.</p>

                  <div className="border-l-4 border-cyan-400/50 pl-4 space-y-3">
                    <p className="text-lg text-gray-300">
                      In Japan, we've already proven that tokens can move at scale —
                    </p>
                    <p className="text-lg text-cyan-300 font-semibold">gasless, non-custodial, and live on Layer 2.</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg text-gray-300">The first was for a football club.</p>
                    <p className="text-lg text-purple-300">
                      The next could be commodities, credits, or cross-border units of value.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-400/50 pl-4 space-y-3">
                    <p className="text-lg text-gray-300">We don't name names.</p>
                    <p className="text-lg text-orange-300 font-semibold">
                      But some of Japan's largest institutions are watching.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-lg p-4">
                    <p className="text-lg text-white font-bold mb-2">
                      And when the next wave of programmable finance flows east —
                    </p>
                    <p className="text-lg text-cyan-300 font-bold">we'll be ready to help move it west.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50" />
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .snap-y {
          scroll-snap-type: y mandatory;
        }
        
        .snap-start {
          scroll-snap-align: start;
        }
        
        .snap-always {
          scroll-snap-stop: always;
        }
        
        @media print {
          .snap-start {
            page-break-before: always;
          }
          .fixed {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .bg-black {
            background: white !important;
          }
          .text-white {
            color: black !important;
          }
          .bg-gradient-to-br {
            background: white !important;
          }
        }
      `}</style>
    </div>
  )
}

export default PrexPitchDeck
