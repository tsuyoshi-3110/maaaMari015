import type { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "記事・レビュー一覧｜MARIE店",
  description:
    "福井発の食べ歩きブログ『MARIE店』で公開中の記事・レビューを一覧表示。写真・動画付きの実食レポから、気になるお店の魅力をまとめてチェックできます。",
  openGraph: {
    title: "記事・レビュー一覧｜MARIE店",
    description:
      "斎野真利江（MARIE）が“勝手に宣伝”する食べ歩き記事・レビューのまとめ。写真・動画付きで見やすく掲載。",
    url: "/products",
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

export default function ProductsPage() {
  return <ProductsClient />;
}
