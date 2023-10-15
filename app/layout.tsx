import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageHeaderProvider from "@/context/pageHeaderProvider";
import MainLayoutHeader from "@/components/mainLayout/header";
import "@/assets/style/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "بیمه بازار",
  description: "علی خسروجردی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PageHeaderProvider>
        <body className={inter.className}>
          <MainLayoutHeader />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
        </body>
      </PageHeaderProvider>
    </html>
  );
}
