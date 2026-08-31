import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Piyush — Portfolio",
  description: "Full Stack Developer & Designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} bg-[#111111] text-neutral-300 font-mono min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
