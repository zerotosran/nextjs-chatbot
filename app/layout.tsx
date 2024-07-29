import React from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';

const RetroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-retro antialiased', GeistSans.variable, GeistMono.variable)}>
        <Providers attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="retro-container min-h-screen bg-beige text-black p-4">
            <div className="retro-header flex justify-between items-center mb-4">
              <div className="retro-title text-2xl font-bold">RETRO COMPUTER</div>
              <div className="retro-icons flex space-x-2">
                <span>🕒</span>
                <span>📁</span>
                <span>🔊</span>
              </div>
            </div>
            <div className="retro-window border-2 border-gray-700 p-2 mb-4">
              <div className="retro-window-header bg-blue-800 text-white p-1 mb-2">App Window</div>
              <div className="retro-window-content bg-white p-2">
                {children}
              </div>
            </div>
            <div className="retro-taskbar flex justify-between items-center bg-gray-300 p-2">
              <button className="retro-button bg-gray-400 px-2 py-1">Start</button>
              <div className="retro-icons flex space-x-2">
                <span>📂</span>
                <span>🖨️</span>
                <span>🔍</span>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RetroLayout;
