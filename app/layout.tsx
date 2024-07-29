import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  // ... (keep the existing metadata)
}

export const viewport = {
  // ... (keep the existing viewport settings)
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-mono antialiased bg-yellow-100',
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
          <div className="flex flex-col min-h-screen p-4">
            <Header className="bg-blue-900 text-white mb-4 p-2 shadow-md" />
            <main className="flex flex-col flex-1 bg-white border-4 border-blue-900 shadow-lg">
              <div className="bg-blue-900 text-white p-2">App Window</div>
              <div className="flex flex-1">
                <div className="w-1/3 bg-black text-white p-4 border-r-4 border-blue-900">
                  {/* Sidebar content */}
                  <div className="mb-4">Sidebar Content</div>
                </div>
                <div className="w-2/3 p-4 overflow-auto">
                  {children}
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
