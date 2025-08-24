import type { Metadata } from "next"
import TsukemenLP from "./tsukemen-lp"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://tsukemen.aizubrandhall-lp2.com"),
  title: {
    default: "【公式】特濃つけ麺｜本格つけ麺通販・お取り寄せ｜魚介豚骨と極にぼし｜会津ブランド館",
    template: "%s | 会津ブランド館",
  },
  description:
    "職人が手仕事で仕込む特濃つけ麺。大規模工場では作れない本物の味を1日限定400食でお届け。濃厚魚介豚骨スープ×極太オーション麺で専門店さながらの一杯をご自宅で。送料無料・即日発送対応。",
  keywords:
    "特濃つけ麺,職人手作り,限定400食,つけ麺通販,魚介豚骨,極太麺,オーション麺,濃厚スープ,本格つけ麺,お取り寄せ,送料無料,会津ブランド館,パーフェクトラーメン",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "【公式】特濃つけ麺｜本格つけ麺通販・お取り寄せ｜魚介豚骨と極にぼし",
    description:
      "職人が手仕事で仕込む特濃つけ麺。大規模工場では作れない本物の味を1日限定400食でお届け。濃厚魚介豚骨スープ×極太オーション麺で専門店さながらの一杯をご自宅で。",
    url: "https://tsukemen.aizubrandhall-lp2.com",
    siteName: "会津ブランド館",
    images: [
      {
        url: "/images/ogp-tsukemen.jpeg",
        width: 1200,
        height: 675,
        alt: "職人手作り特濃つけ麺 - 濃厚つけ汁と極太麺の本格つけ麺",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "【公式】特濃つけ麺｜本格つけ麺通販・お取り寄せ｜魚介豚骨と極にぼし",
    description:
      "職人が手仕事で仕込む特濃つけ麺。大規模工場では作れない本物の味を1日限定400食でお届け。濃厚魚介豚骨スープ×極太オーション麺で専門店さながらの一杯をご自宅で。",
    images: [
      {
        url: "/images/ogp-tsukemen.jpeg",
        alt: "職人手作り特濃つけ麺 - 濃厚つけ汁と極太麺の本格つけ麺",
        width: 1200,
        height: 675,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://tsukemen.aizubrandhall-lp2.com",
  },
  category: "food",
  classification: "つけ麺通販",
  other: {
    "product:price:amount": "1350",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "tokuno-tsukemen-2set",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > つけ麺",
  },
}

export default function Page() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-2EJ6JCB9N2" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2EJ6JCB9N2');
        `}
      </Script>
      <TsukemenLP />
    </>
  )
}
