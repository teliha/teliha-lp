"use client"

import React from 'react'
import { Button as _Button } from "@/components/ui/button"
import { 
  CardDescription as _CardDescription, 
  CardFooter as _CardFooter, 
  CardHeader as _CardHeader, 
  CardTitle as _CardTitle 
} from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from '@mui/material';

interface NewsItem {
  id: number
  title: string
  description: string
  date: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Teliha株式会社のPrexサービス、FC琉球の新ファンプラットフォーム「FCR COIN」に採用",
    description: "Teliha株式会社は、同社のブロックチェーン技術を活用したサービス「Prex」が、株式会社FC琉球の新サービス「FC琉球応援プラットフォーム FCR COIN」に採用されたことをお知らせいたします。",
    date: "2024-11-22",
    image: "/images/news/image_FCR.png",
  }
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-xl font-light tracking-wide font-inter text-black">
            TELIHA
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">ニュース</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link key={item.id} href="/news/fc-ryukyu-partnership">
              <Card className="h-full hover:bg-gray-50 transition-colors">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500">{item.date}</time>
                    <h2 className="text-xl font-bold mt-2 mb-3 line-clamp-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    <div className="flex items-center text-blue-600">
                      <span className="text-sm">続きを読む</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
