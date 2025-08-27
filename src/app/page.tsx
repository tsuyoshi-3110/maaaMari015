// src/app/(routes)/home/page.tsx

import type { Metadata } from "next";
import BackgroundVideo from "@/components/backgroundVideo/BackgroundVideo";
import TopFixedText from "@/components/TopFixedText";

export const metadata: Metadata = {
  title: "MARIE店｜食べ歩きブログ・動画＆写真レビュー",
  description:
    "福井発の食べ歩きブロガー『斎野真利江（MARIE）』が、いろんな飲食店に足を運び、ブログ・動画・写真で“勝手に宣伝”。等身大のレビューでお店の魅力を発信します。",
  openGraph: {
    title: "MARIE店｜食べ歩きブログ・動画＆写真レビュー",
    description:
      "気になったお店を実際に訪れて、記事・動画・画像で分かりやすく紹介する個人グルメブログ。",
    url: "https://maaa-mari015.shop/",
    siteName: "MARIE店",
    images: [
      {
        url: "/ogpLogo.png", // layoutのmetadataBaseで絶対URL化されます
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://maaa-mari015.shop/" },
};

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ① ファーストビュー：背景動画または画像 */}
      <section className="relative h-screen overflow-hidden">
        <BackgroundVideo />
      </section>

      {/* ② テキスト紹介セクション */}
      <section className="relative z-10 text-white px-4 py-20">
        {/* 編集可能な固定テキストコンポーネント */}
        <TopFixedText />

        {/* ページタイトルとリード文 */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center leading-tight mb-6 text-outline">
          MARIE店
        </h1>

        <p className="max-w-3xl mx-auto text-center leading-relaxed text-outline">
          福井を拠点に、<strong>斎野真利江（MARIE）</strong> が
          いろんな飲食店を巡ってブログを書いたり、動画や画像をアップして
          <strong>“勝手に宣伝”</strong>するグルメ発信サイトです。
          気取らない等身大レビューで、行ってみたくなるお店の魅力をお届けします。
        </p>
      </section>

      {/* ③ JSON-LD（構造化データ）：WebSite / Blog / Person ※絶対URLに更新 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "MARIE店",
                url: "https://maaa-mari015.shop/",
                inLanguage: "ja",
                image: "https://maaa-mari015.shop/ogpLogo.png",
                publisher: { "@id": "#marie-person" },
                description:
                  "福井発の食べ歩きブロガー『斎野真利江（MARIE）』が、ブログ・動画・写真でお店を紹介する個人サイト。",
              },
              {
                "@type": "Blog",
                name: "MARIE店",
                url: "https://maaa-mari015.shop/",
                inLanguage: "ja",
                publisher: { "@id": "#marie-person" },
                image: "https://maaa-mari015.shop/ogpLogo.png",
                about: ["グルメ", "食べ歩き", "飲食店レビュー", "動画", "写真"],
              },
              {
                "@type": "Person",
                "@id": "#marie-person",
                name: "斎野 真利江",
                alternateName: "MARIE",
                jobTitle: "食べ歩きブロガー",
                email: "mailto:maaa.mari015@gmail.com",
                telephone: "+81-80-6913-1127",
                address: {
                  "@type": "PostalAddress",
                  postalCode: "910-0102",
                  addressRegion: "福井県",
                  addressLocality: "福井市",
                  streetAddress: "川合鷲塚町28-18",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
