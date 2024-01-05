import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { Header } from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Koom App",
  description: "It's time the wake up",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0e375f] to-[#000564] text-white">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
