import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tsukemen.aizubrandhall-lp2.com"),
  title: {
    default: "【公式】特濃つけ麺｜本格つけ麺通販・お取り寄せ｜魚介豚骨と極にぼし｜会津ブランド館",
    template: "%s | 会津ブランド館",
  },
  description: "職人が手仕事で仕込む特濃つけ麺。大規模工場では作れない本物の味を1日限定400食でお届け。濃厚魚介豚骨スープ×極太オーション麺で専門店さながらの一杯をご自宅で。",
  generator: "Next.js",
  applicationName: "会津ブランド館",
  referrer: "origin-when-cross-origin",
  keywords: ["会津", "福島", "特産品", "グルメ", "通販", "つけ麺", "特濃つけ麺", "魚介豚骨"],
  authors: [{ name: "会津ブランド館", url: "https://tsukemen.aizubrandhall-lp2.com" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <link rel="canonical" href="https://tsukemen.aizubrandhall-lp2.com" />
      </head>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
