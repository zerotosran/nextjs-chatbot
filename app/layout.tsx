import React from 'react';
import '@/app/globals.css';

const RetroChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="retro-container bg-yellow-100 min-h-screen font-mono">
      <div className="retro-window border-4 border-blue-900 mx-auto max-w-6xl">
        <div className="retro-window-header bg-blue-900 text-white p-1">
          App Window
        </div>
        <div className="retro-window-content flex">
          <div className="w-1/3 bg-black text-white p-4">
            <div className="border border-white p-2 mb-4">
              {/* Placeholder for user input or additional info */}
            </div>
            {/* Black sidebar content */}
          </div>
          <div className="w-2/3 bg-white p-4">
            <div className="border border-gray-300 p-4 mb-4">
              <h2 className="font-bold mb-2">Welcome to Next.js AI Chatbot!</h2>
              <p className="text-sm">
                This is an open source AI chatbot app template built with Next.js, the Vercel AI SDK, and Vercel KV.
              </p>
              <p className="text-sm mt-2">
                It uses React Server Components to combine text with generative UI as output of the LLM. The UI state is synced through the SDK so the model is aware of your interactions as they happen.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-black text-white p-2 text-sm">Trending memecoins today?</div>
              <div className="bg-black text-white p-2 text-sm">BOME right now?</div>
              <div className="bg-black text-white p-2 text-sm">What is BOME?</div>
              <div className="bg-black text-white p-2 text-sm">Recent events about BOME?</div>
            </div>
            <div className="border border-gray-300 p-2 flex items-center">
              <span className="mr-2">+</span>
              <input type="text" placeholder="Send a message..." className="flex-grow bg-transparent outline-none" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroChatLayout;
