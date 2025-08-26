import type { Metadata } from "next";
import StoresClient from "@/components/StoresClient";
import { PhoneSection } from "@/components/PhoneSection";

export const metadata: Metadata = {
  title: "掲載店舗一覧｜MARIE店",
  description:
    "福井発の食べ歩きブログ『MARIE店』で紹介・訪問したお店の一覧ページ。ジャンルやエリアごとに、ブログ記事・動画・写真付きで探せます。",
  openGraph: {
    title: "掲載店舗一覧｜MARIE店",
    description:
      "斎野真利江（MARIE）が実際に足を運んで“勝手に宣伝”した掲載店舗のまとめ。気になるお店をチェック！",
    url: "/stores",
    siteName: "MARIE店",
    images: [
      {
        url: "/ogpLogo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function StoresPage() {
  return (
    <main className="px-4 py-16">
      {/* ページタイトル・説明文 */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-white text-outline">
          MARIE店 ─ 掲載店舗一覧
        </h1>
        <p className="leading-relaxed text-white text-outline">
          <strong>斎野真利江（MARIE）</strong> が実際に訪れて、
          ブログ・動画・画像で紹介したお店をまとめています。
          <br className="hidden lg:block" />
          新規掲載や取材のご相談も歓迎です。下の連絡先からお気軽にどうぞ。
        </p>
      </section>

      {/* 連絡先セクション（掲載・取材のご相談用） */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <PhoneSection />
      </section>

      {/* 掲載店舗カード（Firestore連携） */}
      <StoresClient />
    </main>
  );
}
