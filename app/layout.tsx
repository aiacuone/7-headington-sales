import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
// import { Toaster } from '@/components/ui/toaster'
import { Providers } from '@/components/Providers'
import { Main } from '@/components/ui/Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '7 Headington Rd',
  description: 'Rent Guide',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="stack h-[100dvh]">
            <Header />
            <Main>{children}</Main>
            <Footer />
          </div>
        </Providers>
      </body>
      {/* <Toaster /> */}
    </html>
  )
}
