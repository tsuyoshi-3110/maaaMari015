"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import clsx from "clsx";
import { useThemeGradient } from "@/lib/useThemeGradient";
import { useHeaderLogoUrl } from "../hooks/useHeaderLogoUrl";
import { auth } from "@/lib/firebase";
import { THEMES, ThemeKey } from "@/lib/themes";

const HEADER_H = "3rem";

export default function Header({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const gradient = useThemeGradient();
  const logoUrl = useHeaderLogoUrl();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const gradientClass = gradient
    ? `bg-gradient-to-b ${gradient}`
    : "bg-gray-100";

  // ダーク判定（brandH, brandG, brandI）
  const darkKeys: ThemeKey[] = ["brandH", "brandG", "brandI"];
  const currentKey = (Object.entries(THEMES).find(
    ([, v]) => v === gradient
  )?.[0] ?? null) as ThemeKey | null;
  const isDark = currentKey ? darkKeys.includes(currentKey) : false;

  return (
    <header
      className={clsx(
        "sticky top-0 z-30 flex items-center justify-between px-4 h-12",
        gradientClass,
        className,
        !isDark && "border-b border-gray-300"
      )}
      style={{ "--header-h": HEADER_H } as React.CSSProperties}
    >
      {/* ロゴ */}
      <Link
        href="/"
        className={clsx(
          "text-md font-bold flex items-center gap-2 py-2 hover:opacity-80",
          "text-white text-outline"
        )}
        aria-label="MARIE店 ホーム"
      >
        {logoUrl && logoUrl.trim() !== "" && (
          <Image
            src={logoUrl}
            alt="MARIE店ロゴ"
            width={48}
            height={48}
            className="w-12 h-12 object-contain transition-opacity duration-200"
            unoptimized
          />
        )}
        MARIE店
      </Link>

      {/* SNS */}
      <nav className="flex gap-2 ml-auto mr-2">
        <a
          href="https://www.instagram.com/akari.akar1?igsh=NzRvMDJwMnNuOTh6&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={clsx(
            isDark ? "text-white" : "text-black",
            "hover:opacity-80 transition"
          )}
        >
          <Image
            src="/instagram-logo.png"
            alt="Instagram"
            width={32}
            height={32}
            className="object-contain"
            unoptimized
          />
        </a>
        <a
          href="https://www.instagram.com/___aamh__s/profilecard/?igsh=MXg4dHF4MWF1ZGFjdg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={clsx(
            isDark ? "text-white" : "text-black",
            "hover:opacity-80 transition"
          )}
        >
          <Image
            src="/instagram-logo.png"
            alt="LINE"
            width={32}
            height={32}
            className="object-contain"
            unoptimized
          />
        </a>
        {/* メールでの掲載依頼（テキストリンク） */}
      </nav>

      {/* ハンバーガーメニュー */}
      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={clsx(
                "w-7 h-7 border-2",
                isDark ? "text-white border-white" : "text-black border-black"
              )}
              aria-label="メニューを開く"
            >
              <Menu size={26} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className={clsx(
              "flex flex-col",
              "bg-gray-100",
              gradient && "bg-gradient-to-b",
              gradient
            )}
          >
            <SheetHeader className="pt-4 px-4">
              <SheetTitle
                className={clsx(
                  "text-center text-xl",
                  isDark ? "text-white" : "text-black"
                )}
              >
                メニュー
              </SheetTitle>
            </SheetHeader>

            {/* ブロガー用メニュー構成 */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-4 text-center">
              {[
                { href: "/", label: "ホーム" },
                { href: "/products", label: "記事・レビュー一覧" }, // 既存Productsを記事一覧に転用
                { href: "/blog", label: "ブログ（時系列）" }, // 既存の /blog がある場合
                { href: "/stores", label: "掲載店舗一覧" },
                { href: "/news", label: "お知らせ" },
                { href: "/about", label: "このブログについて" },
                { href: "/apply", label: "掲載・取材のご相談" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "text-lg hover:opacity-80",
                    isDark ? "text-white" : "text-black"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* 管理者向け（ログイン時のみ表示。ラベルはブロガー向けに調整） */}
            <div className="p-4 space-y-4">
              {isLoggedIn && (
                <>
                  <Link
                    href="/postList"
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-center text-lg hover:opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    タイムライン
                  </Link>
                  <Link
                    href="/community"
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-center text-lg hover:opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    コミュニティ
                  </Link>
                  <Link
                    href="/analytics"
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-center text-lg hover:opacity-80",
                      isDark ? "text-white" : "text-black"
                    )}
                  >
                    アクセス分析
                  </Link>
                </>
              )}

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={clsx(
                  "block text-center text-lg hover:opacity-80",
                  isDark ? "text-white" : "text-black"
                )}
              >
                Administrator Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
