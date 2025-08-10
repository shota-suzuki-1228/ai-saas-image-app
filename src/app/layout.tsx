import type { Metadata } from "next";
import {Noto_Sans_JP} from "next/font/google"
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const notoSansJP = Noto_Sans_JP({
  subsets:["latin"],
  weight:["400","500","700"],
  preload:true,
})

export const metadata: Metadata = {
  title: "AI SaaS App",
  description: "AIを用いた画像生成アプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/dashboard"}>
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
