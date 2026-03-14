import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LearnSphere Oracle – Adaptive AI Learning Platform",
  description:
    "Personalized learning pathways powered by Qwen3, MiniMax, Grok, and Gemini. Master any skill with instant evaluation and adaptive tasks.",
  openGraph: {
    title: "LearnSphere Oracle – Adaptive AI Learning Platform",
    description:
      "Personalized learning pathways powered by Qwen3, MiniMax, Grok, and Gemini. Master any skill with instant evaluation and adaptive tasks.",
    type: "website",
    siteName: "LearnSphere Oracle",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LearnSphere Oracle – Adaptive AI Learning Platform",
    description:
      "Personalized learning pathways powered by Qwen3, MiniMax, Grok, and Gemini. Master any skill with instant evaluation and adaptive tasks.",
  },
  metadataBase: new URL("https://learnsphere.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
