'use client';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated gradient blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-[#0C5F4C]/10 dark:bg-[#0C5F4C]/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob-1" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300/10 dark:bg-blue-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob-2" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300/10 dark:bg-purple-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob-3" />
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-pink-300/10 dark:bg-pink-400/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob-1 animate-delay-2s" />

      {/* Additional ambient blobs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/5 dark:bg-cyan-300/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob-2 animate-delay-4s" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/5 dark:bg-emerald-300/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 animate-blob-3 animate-delay-6s" />
    </div>
  );
}
