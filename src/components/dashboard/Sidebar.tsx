'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { LayoutDashboard, User, Activity, Clock, LogOut } from 'lucide-react';
import { useAuthStore } from '@/lib/store/auth-store';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    key: 'overview',
    icon: LayoutDashboard,
    href: '/dashboard',
    enabled: true,
  },
  {
    key: 'yourInfo',
    icon: User,
    href: '/dashboard/info',
    enabled: false,
  },
  {
    key: 'status',
    icon: Activity,
    href: '/dashboard/status',
    enabled: false,
  },
  {
    key: 'timeline',
    icon: Clock,
    href: '/dashboard/timeline',
    enabled: false,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations('dashboard');
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <aside className="w-64 border-r bg-card h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b">
        <img
          src="https://res.cloudinary.com/dzi2p0pqa/image/upload/v1763663304/daewusmce0jbacjvqxxk.png"
          alt="CashArt"
          className="h-10 w-auto dark:hidden"
        />
        <img
          src="https://res.cloudinary.com/dzi2p0pqa/image/upload/v1763664313/y2mjn6ltzclwzo2zw0xv.png"
          alt="CashArt"
          className="h-10 w-auto hidden dark:block"
        />
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));

          if (!item.enabled) {
            return (
              <div
                key={item.key}
                className="relative group"
              >
                <div
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-not-allowed opacity-50'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{t(item.key)}</span>
                </div>
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden group-hover:block z-50">
                  <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
                    Próximamente
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.key}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{t(item.key)}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
