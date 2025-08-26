// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Script from "next/script";
import ThemeBackground from "@/components/ThemeBackground";
import WallpaperBackground from "@/components/WallpaperBackground";
import SubscriptionOverlay from "@/components/SubscriptionOverlay";
import { SITE_KEY } from "@/lib/atoms/siteKeyAtom";
import {
  kosugiMaru,
  notoSansJP,
  shipporiMincho,
  reggaeOne,
  yomogi,
  hachiMaruPop,
} from "@/lib/font";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// ✅ Blog向けにメタ情報を更新（themeColorは viewport にて指定）
export const metadata: Metadata = {
  title: "MARIE店｜食べ歩きブログ（斎野真利江）",
  description:
    "福井を拠点に、いろんな飲食店を巡って“勝手に宣伝”する個人ブログ。食レポ記事・動画・写真で、気になったお店の魅力をリアルにお届けします。",
  keywords: [
    "MARIE店",
    "斎野真利江",
    "グルメブログ",
    "食べ歩き",
    "飲食店レビュー",
    "食レポ",
    "福井グルメ",
    "北陸グルメ",
    "カフェ",
    "ランチ",
    "ディナー",
    "スイーツ",
    "動画",
    "写真",
  ],
  authors: [{ name: "斎野 真利江" }],
  // metadataBase は未確定ドメインのため省略
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MARIE店｜食べ歩きブログ（斎野真利江）",
    description:
      "いろんな飲食店を巡ってブログ・動画・写真で“勝手に宣伝”。等身大のレビューでお店の魅力を発信します。",
    url: "/",
    siteName: "MARIE店",
    type: "website",
    images: [
      {
        url: "/ogpLogo.png",
        width: 1200,
        height: 630,
        alt: "MARIE店 OGP",
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARIE店｜食べ歩きブログ（斎野真利江）",
    description: "食べ歩き・動画・写真で“勝手に宣伝”する個人グルメブログ。",
    images: ["/ogpLogo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" },
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico?v=4",
  },
};

// ✅ ここで themeColor を指定（root で一括適用）
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`
        ${geistSans.variable} ${geistMono.variable}
        ${kosugiMaru.variable} ${notoSansJP.variable}
        ${yomogi.variable} ${hachiMaruPop.variable} ${reggaeOne.variable} ${shipporiMincho.variable}
        antialiased
      `}
    >
      <head>
        {/* OGP画像の事前読み込み（ファイル名は固定で /ogpLogo.png） */}
        <link rel="preload" as="image" href="/ogpLogo.png" type="image/png" />
        {/* 検索コンソール所有権確認が必要な場合は以下を使用
        <meta name="google-site-verification" content="（コード）" />
        */}
      </head>

      <body className="relative min-h-screen bg-[#ffffff]">
        <SubscriptionOverlay siteKey={SITE_KEY} />
        <WallpaperBackground />
        <ThemeBackground />
        <Header />
        {children}

        {/* 構造化データ：WebSite / Blog / Person を @graph でまとめる */}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "MARIE店",
                "url": "/",
                "inLanguage": "ja",
                "publisher": { "@id": "#owner" },
                "image": "/ogpLogo.png",
                "description":
                  "福井を拠点に、いろんな飲食店を巡って“勝手に宣伝”する個人ブログ。食レポ記事・動画・写真でお店の魅力を発信。",
              },
              {
                "@type": "Blog",
                "name": "MARIE店",
                "url": "/",
                "inLanguage": "ja",
                "publisher": { "@id": "#owner" },
                "image": "/ogpLogo.png",
                "about": ["グルメ", "食べ歩き", "飲食店レビュー", "写真", "動画"],
              },
              {
                "@type": "Person",
                "@id": "#owner",
                "name": "斎野 真利江",
                "jobTitle": "食べ歩きブロガー",
                "email": "mailto:maaa.mari015@gmail.com",
                "telephone": "+81-80-6913-1127",
                "address": {
                  "@type": "PostalAddress",
                  "postalCode": "910-0102",
                  "addressRegion": "福井県",
                  "addressLocality": "福井市川合鷲塚町28-18"
                }
              }
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
