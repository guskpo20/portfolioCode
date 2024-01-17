import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/context/ThemeContext"
import './globals.scss'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gustavo Keymetlian',
  description: 'Portfolio Desarrollador Web con next, Mejor desarrollador uruguay',
  applicationName: "Portfolio de Gustavo",
  authors: [{name:"Gustavo Keymetlian"}],
  keywords: "Next, Development, freelance, web, email, Desarrollo, trabajo, pagina web",
  icons: ["https://raw.githubusercontent.com/guskpo20/portfolioImages/main/android-chrome-192x192.png", "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/android-chrome-512x512.png", "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/apple-touch-icon.png", "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/favicon-16x16.png", "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/favicon-32x32.png", "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/favicon.ico", "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/mstile-150x150.png"],
  /* manifest: "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/site.webmanifest", */
  openGraph: {
    type: "website",
    url: "https://portfolio-gules-eta-49.vercel.app",
    title: "Gustavo Keymetlian Portfolio",
    description: "Portfolio Desarrollador Web con next, Mejor desarrollador uruguay",
    siteName: "Gustavo Portfolio",
    images: [{
      url: "https://raw.githubusercontent.com/guskpo20/portfolioImages/main/og.png",
    }],
  },
  appleWebApp: { 
    capable: true, 
    title: "Gustavo Keymetlian Portfolio"
  },
  category: "Portfolio",
  alternates:{
    canonical: "https://portfolio-gules-eta-49.vercel.app"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="@/public/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
