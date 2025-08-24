import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://tsukemen.aizubrandhall-lp.com"),
  title: {
    default: "会津ブランド館｜福島県会津の特産品・グルメ通販",
    template: "%s | 会津ブランド館",
  },
  description: "福島県会津の特産品・グルメを全国にお届け。本格つけ麺をはじめとした会津の味をお楽しみください。",
  generator: "Next.js",
  applicationName: "会津ブランド館",
  referrer: "origin-when-cross-origin",
  keywords: ["会津", "福島", "特産品", "グルメ", "通販", "つけ麺"],
  authors: [{ name: "会津ブランド館", url: "https://tsukemen.aizubrandhall-lp.com" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2EJ6JCB9N2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2EJ6JCB9N2');
      `,
          }}
        />
        <link rel="canonical" href="https://tsukemen.aizubrandhall-lp.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
