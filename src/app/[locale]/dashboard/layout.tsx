'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/auth-store';
import { Sidebar } from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#1a1d21] flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 lg:ml-0 w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
