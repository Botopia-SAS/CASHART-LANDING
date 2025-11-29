"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Handshake,
  Users,
  CreditCard,
  BarChart3,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuthStore } from "@/lib/store/auth-store";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menuItems = [
  {
    key: "overview",
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/en/dashboard",
    enabled: true,
  },
  {
    key: "deals",
    label: "Deals",
    icon: Handshake,
    href: "/dashboard/products",
    enabled: false,
  },
  {
    key: "clients",
    label: "Clients",
    icon: Users,
    href: "/dashboard/orders",
    enabled: false,
  },
  {
    key: "payments",
    label: "Payments",
    icon: CreditCard,
    href: "/dashboard/settings",
    enabled: false,
  },
  {
    key: "analytics",
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
    enabled: false,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const logout = useAuthStore((state) => state.logout);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden p-2 rounded-lg bg-[#252930] border border-[#3a3f47] hover:bg-[#2d3238] transition-colors"
      >
        <Menu className="h-6 w-6 text-gray-300" />
      </button>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "w-64 border-r border-[#3a3f47] bg-[#1a1d21] h-screen flex flex-col transition-transform duration-300 lg:sticky lg:top-0",
          "fixed top-0 left-0 z-50",
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-[#3a3f47] flex items-center justify-between">
          <div className="relative h-10 w-32">
            <Image
              src="https://res.cloudinary.com/dzi2p0pqa/image/upload/v1763664313/y2mjn6ltzclwzo2zw0xv.png"
              alt="CashArt"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-1 hover:bg-[#252930] rounded text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname?.startsWith(item.href));

            if (!item.enabled) {
              return (
                <div key={item.key} className="relative group">
                  <div
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-not-allowed opacity-50 text-gray-500"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 hidden group-hover:block z-50">
                    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
                      Coming Soon
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30"
                    : "text-gray-400 hover:bg-[#252930] hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-[#3a3f47]">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-[#252930]"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
}
