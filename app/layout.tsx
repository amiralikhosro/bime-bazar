import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageHeaderProvider from "@/context/pageHeaderProvider";
import MainLayoutHeader from "@/components/mainLayout/header";
import "@/assets/style/index.scss";
import ReactQueryProvider from "@/context/ReactQueryProvider";

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
    <html lang="fa" dir="rtl">
      <body className={inter.className} suppressHydrationWarning={true}>
        <PageHeaderProvider>
          <MainLayoutHeader />
          <main>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
        </PageHeaderProvider>
      </body>
    </html>
  );
}
