import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from '@/widgets/layout/ui/Sidebar';
import { UserHeaderProfile } from '@/widgets/layout/ui/UserHeaderProfile';

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "PAYHUB",
  description: "Payment Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${dmSans.variable} font-sans bg-[#F4F7FE]`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-[290px] px-8 md:px-12 pt-28 pb-12 transition-all">
            <header className="fixed top-0 left-[290px] right-0 h-24 flex items-center justify-end px-12 z-40 bg-[#F4F7FE]/80 backdrop-blur-md">
              <UserHeaderProfile userName="김상훈" />
            </header>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
