import type React from "react"
import type { Metadata } from "next"
import {  Ubuntu } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Oduyale Enoch | Front-End Developer",
  description: "Portfolio website of Oduyale Enoch, a front-end developer specializing in React and Angular",
  icons: {
    icon: "/public/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ubuntu.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'