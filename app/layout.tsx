import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flingo",
  description: "Interactive platform for language learning with lessons, quizzes, and progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/favicon.ico",
        },
        variables: {
          colorPrimary: "#22C55E",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
