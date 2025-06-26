"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Users, Code, Home, Presentation, Newspaper } from "lucide-react"
// 既存のimportはそのままに、新しいimportを追加
import { useLanguage } from "./hooks/use-language"
import { LanguageSwitcher } from "./components/language-switcher"
import { useMobile } from "./hooks/use-mobile"
import { MobileNavigation } from "./components/mobile-navigation"

const COLOR = "#FFFFFF"
const HIT_COLOR = "#00F0FF" // サイバーな青色に変更
const BACKGROUND_COLOR = "#000000"
const BALL_COLOR = "#00F0FF"
const PADDLE_COLOR = "#FFFFFF"
const LETTER_SPACING = 1
const WORD_SPACING = 3

const PIXEL_MAP = {
  P: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  R: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  O: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  S: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  F: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  B: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  C: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
}

interface Pixel {
  x: number
  y: number
  size: number
  hit: boolean
}

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
  targetY: number
  isVertical: boolean
}

export function SeamlessTransfers() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pixelsRef = useRef<Pixel[]>([])
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
  const paddlesRef = useRef<Paddle[]>([])
  const scaleRef = useRef(1)
  const [buttonHover, setButtonHover] = useState(false)
  const [newsHover, setNewsHover] = useState(false)
  const [techHover, setTechHover] = useState(false)
  const [teamHover, setTeamHover] = useState(false)
  const [deckHover, setDeckHover] = useState(false)
  const { language } = useLanguage()
  const isMobile = useMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000)
      initializeGame()
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      const LARGE_PIXEL_SIZE = 8 * scale
      const SMALL_PIXEL_SIZE = 4 * scale
      const BALL_SPEED = 6 * scale

      pixelsRef.current = []
      const words = ["SEAMLESS TRANSFERS", "ENDLESS POSSIBILITIES"]

      const calculateWordWidth = (word: string, pixelSize: number) => {
        return (
          word.split("").reduce((width, letter) => {
            const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
            return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
          }, 0) -
          LETTER_SPACING * pixelSize
        )
      }

      const totalWidthLarge = calculateWordWidth(words[0], LARGE_PIXEL_SIZE)
      const totalWidthSmall = calculateWordWidth(words[1], SMALL_PIXEL_SIZE)
      const totalWidth = Math.max(totalWidthLarge, totalWidthSmall)
      const scaleFactor = (canvas.width * 0.8) / totalWidth

      const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor
      const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor

      const largeTextHeight = 5 * adjustedLargePixelSize
      const smallTextHeight = 5 * adjustedSmallPixelSize
      const spaceBetweenLines = 5 * adjustedLargePixelSize
      const totalTextHeight = largeTextHeight + spaceBetweenLines + smallTextHeight

      let startY = (canvas.height - totalTextHeight) / 2

      words.forEach((word, wordIndex) => {
        const pixelSize = wordIndex === 0 ? adjustedLargePixelSize : adjustedSmallPixelSize
        const totalWidth =
          wordIndex === 0
            ? calculateWordWidth(word, adjustedLargePixelSize)
            : calculateWordWidth(word, adjustedSmallPixelSize)

        let startX = (canvas.width - totalWidth) / 2

        word.split("").forEach((letter) => {
          if (letter === " ") {
            startX += 3 * pixelSize // Space width
            return
          }

          const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
          if (!pixelMap) return

          for (let i = 0; i < pixelMap.length; i++) {
            for (let j = 0; j < pixelMap[i].length; j++) {
              if (pixelMap[i][j]) {
                const x = startX + j * pixelSize
                const y = startY + i * pixelSize
                pixelsRef.current.push({ x, y, size: pixelSize, hit: false })
              }
            }
          }
          startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
        })

        startY += wordIndex === 0 ? largeTextHeight + spaceBetweenLines : 0
      })

      // Initialize ball position near the top right corner
      const ballStartX = canvas.width * 0.9
      const ballStartY = canvas.height * 0.1

      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: -BALL_SPEED,
        dy: BALL_SPEED,
        radius: adjustedLargePixelSize / 2,
      }

      const paddleWidth = adjustedLargePixelSize
      const paddleLength = 10 * adjustedLargePixelSize

      paddlesRef.current = [
        {
          x: 0,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width - paddleWidth,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: 0,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: canvas.height - paddleWidth,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
      ]
    }

    const updateGame = () => {
      const ball = ballRef.current
      const paddles = paddlesRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy
      }
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx
      }

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx
          }
        } else {
          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy
          }
        }
      })

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.targetY = ball.y - paddle.height / 2
          paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
          paddle.y += (paddle.targetY - paddle.y) * 0.1
        } else {
          paddle.targetY = ball.x - paddle.width / 2
          paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
          paddle.x += (paddle.targetY - paddle.x) * 0.1
        }
      })

      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true
          const centerX = pixel.x + pixel.size / 2
          const centerY = pixel.y + pixel.size / 2
          if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
            ball.dx = -ball.dx
          } else {
            ball.dy = -ball.dy
          }
        }
      })
    }

    const drawGame = () => {
      if (!ctx) return

      ctx.fillStyle = BACKGROUND_COLOR
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      ctx.fillStyle = BALL_COLOR
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = PADDLE_COLOR
      paddlesRef.current.forEach((paddle) => {
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
      })
    }

    const gameLoop = () => {
      updateGame()
      drawGame()
      requestAnimationFrame(gameLoop)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    gameLoop()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        aria-label="Seamless Transfers, Endless Possibilities: Fullscreen Pong game with pixel text"
      />

      {/* 言語切り替えボタン */}
      <LanguageSwitcher />

      {/* サイバーパンク風のグロー効果を持つ背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
      </div>

      {/* ナビゲーションメニュー - モバイルとデスクトップで分岐 */}
      {isMobile ? (
        <div className="absolute top-4 left-4 z-50">
          <MobileNavigation />
        </div>
      ) : (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-4">
          {/* ホームページは現在のページなのでアクティブスタイルを適用 */}
          <div className="px-4 py-2 bg-black/70 backdrop-blur-sm border border-cyan-400 rounded-md flex items-center space-x-2">
            <Home size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400 whitespace-nowrap">
              {language === "en" ? "HOME" : "ホーム"}
            </span>
          </div>

          <Link href="/news">
            <div
              className="group relative"
              onMouseEnter={() => setNewsHover(true)}
              onMouseLeave={() => setNewsHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${newsHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Newspaper size={16} className={`${newsHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${newsHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "NEWS" : "ニュース"}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/tech">
            <div
              className="group relative"
              onMouseEnter={() => setTechHover(true)}
              onMouseLeave={() => setTechHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${techHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Code size={16} className={`${techHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${techHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "PRODUCTS" : "プロダクト"}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/team">
            <div
              className="group relative"
              onMouseEnter={() => setTeamHover(true)}
              onMouseLeave={() => setTeamHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${teamHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Users size={16} className={`${teamHover ? "text-cyan-400" : "text-white/70"} transition-colors`} />
                <span
                  className={`text-sm font-medium ${teamHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "TEAM" : "チーム"}
                </span>
              </div>
            </div>
          </Link>

          <Link href="/deck" target="_blank" rel="noopener noreferrer">
            <div
              className="group relative"
              onMouseEnter={() => setDeckHover(true)}
              onMouseLeave={() => setDeckHover(false)}
            >
              <div
                className={`px-4 py-2 bg-black/50 backdrop-blur-sm border ${deckHover ? "border-cyan-400" : "border-white/10"} rounded-md flex items-center space-x-2 transition-colors`}
              >
                <Presentation
                  size={16}
                  className={`${deckHover ? "text-cyan-400" : "text-white/70"} transition-colors`}
                />
                <span
                  className={`text-sm font-medium ${deckHover ? "text-cyan-400" : "text-white/70"} transition-colors whitespace-nowrap`}
                >
                  {language === "en" ? "DECK" : "デッキ"}
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* 日本語ミッションテキスト（日本語モードの場合のみ表示） */}
      {language === "jp" && (
        <div className="absolute bottom-32 left-0 right-0 text-center">
          <div className="inline-block bg-gradient-to-r from-black/70 via-black/80 to-black/70 backdrop-blur-sm px-8 py-3 rounded-md border border-cyan-400/30">
            <div className="relative overflow-hidden">
              {/* サイバーパンク風のグリッチエフェクト */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              {/* テキスト */}
              <p className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 font-bold text-xl tracking-wider">
                送るを簡単に！経済の流れを加速する
              </p>

              {/* 装飾ライン */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            </div>
          </div>
        </div>
      )}

      {/* 未来的なCTAボタン */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <Link href="/tech">
          <div
            className="group relative"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            {/* ボタンの背景グロー効果 */}
            <div
              className={`absolute inset-0 bg-cyan-400 rounded-md filter blur-md transition-opacity duration-500 ${buttonHover ? "opacity-30" : "opacity-0"}`}
            ></div>

            {/* メインボタン */}
            <button className="relative px-8 py-3 bg-black border border-cyan-400 text-cyan-400 rounded-md overflow-hidden group-hover:text-white transition-all duration-300 z-10">
              <span className="relative z-10 flex items-center font-medium tracking-wider">
                {language === "en" ? "UNLOCK THE FUTURE" : "詳しく見る"}
                <ArrowRight
                  className={`ml-2 transition-transform duration-500 ${buttonHover ? "translate-x-1" : ""}`}
                  size={18}
                />
              </span>

              {/* ホバー時の背景アニメーション */}
              <span
                className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform transition-transform duration-500 ${buttonHover ? "translate-x-0" : "-translate-x-full"}`}
              ></span>
            </button>

            {/* デジタルノイズエフェクト */}
            <div
              className={`absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay transition-opacity duration-300 ${buttonHover ? "opacity-40" : "opacity-0"}`}
            ></div>
          </div>
        </Link>
      </div>

      {/* 未来的なデコレーション要素 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-4">
        <div className="text-xs text-cyan-400/50 tracking-[0.2em] uppercase">Blockchain Powered • Secure • Instant</div>
        <div className="h-3 w-px bg-cyan-400/30"></div>
        <div className="text-xs text-cyan-400/80 tracking-wider font-medium">
          {language === "en" ? "TELIHA LIMITED" : "株式会社Teliha"}
        </div>
      </div>
    </div>
  )
}

export default SeamlessTransfers
