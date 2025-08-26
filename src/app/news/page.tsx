// src/app/(routes)/news/page.tsx
import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: "お知らせ・更新情報｜MARIE店",
  description:
    "福井発の食べ歩きブログ『MARIE店』の最新情報。新着記事・動画公開、取材募集、掲載のお知らせなどをお届けします。",
  openGraph: {
    title: "お知らせ・更新情報｜MARIE店",
    description:
      "斎野真利江（MARIE）による新着公開やキャンペーン、取材・掲載に関する最新トピックスを随時更新。",
    url: "/news",
    siteName: "MARIE店",
    images: [{ url: "/ogpLogo.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-center text-white/80">
        お知らせ
      </h1>
      <NewsClient />
    </main>
  );
}
