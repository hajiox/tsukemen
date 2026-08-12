import type React from "react"
import type { Metadata, Viewport } from "next"
import { Noto_Sans_JP } from "next/font/google"
import Script from "next/script"
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
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3741108852688541');
              fbq('track', 'PageView');
              fbq('track', 'ViewContent', {
                content_name: 'tsukemen',
                content_category: 'product_lp'
              });
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3741108852688541&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
