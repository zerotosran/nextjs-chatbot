import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Next.js AI Chatbot',
    template: `%s - Next.js AI Chatbot`
  },
  description: 'An AI-powered chatbot template built with Next.js and Vercel.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-retro antialiased bg-retro-background',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header className="bg-retro-headerBg text-retro-headerText" />
            <main className="flex flex-col flex-1">
              <div className="retro-window border-4 border-retro-windowBorder bg-retro-windowBg shadow-retro mx-auto max-w-6xl mt-4 flex-1">
                <div className="retro-window-header bg-retro-headerBg text-retro-headerText p-1">
                  App Window
                </div>
                <div className="retro-window-content flex h-full">
                  <div className="w-1/3 bg-retro-sidebarBg text-retro-sidebarText p-4">
                    {/* Sidebar content can be added here */}
                  </div>
                  <div className="w-2/3 bg-retro-windowBg p-4 overflow-auto">
                    {children}
                  </div>
                </div>
              </div>
            </main>
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
