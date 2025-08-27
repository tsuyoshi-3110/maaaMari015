import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "このブログについて｜MARIE店",
  description:
    "福井発の食べ歩きブロガー『斎野真利江（MARIE）』の想いと発信スタンス。実際にお店へ足を運び、ブログ・動画・写真で“勝手に宣伝”。等身大のレビューでお店の魅力を届けます。",
  openGraph: {
    title: "このブログについて｜MARIE店",
    description:
      "斎野真利江（MARIE）が運営する食べ歩きブログの理念と活動内容。訪問取材・撮影・編集で、行ってみたくなる情報を発信します。",
    url: "https://maaa-mari015.shop/about",
    siteName: "MARIE店",
    images: [
      {
        url: "/ogpLogo.png", // layout.tsxのmetadataBaseにより絶対URL化
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://maaa-mari015.shop/about" },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-4 text-center text-white/80 text-outline">
        当店の思い
      </h1>
      <AboutClient />
    </main>
  );
}
