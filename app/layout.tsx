import { Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Footer from "@/components/sections/footer";
import AuthProvider from "@/context/authContext";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", roboto.variable, "font-sans")}
    >
      <body className="">
        <ThemeProvider>
          <AuthProvider>
          {children}
          <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
