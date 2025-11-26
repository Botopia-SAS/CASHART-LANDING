'use client';

import { useState } from 'react';
import { CollectorView } from '@/components/dashboard/CollectorView';
import { VendorView } from '@/components/dashboard/VendorView';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Store } from 'lucide-react';

type UserRole = 'collector' | 'vendor';

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<UserRole>('vendor');

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header with Role Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-400">
            {userRole === 'collector'
              ? 'Track your art collection and market insights'
              : 'Manage your business with total control'}
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <Badge
            className={
              userRole === 'collector'
                ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-center sm:text-left'
                : 'bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-center sm:text-left'
            }
          >
            {userRole === 'collector' ? 'Collector' : 'Vendor'}
          </Badge>

          <div className="flex items-center gap-1 sm:gap-2 p-1 rounded-lg bg-[#252930] border border-[#3a3f47]">
            <Button
              onClick={() => setUserRole('collector')}
              variant={userRole === 'collector' ? 'default' : 'ghost'}
              size="sm"
              className={
                userRole === 'collector'
                  ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white text-xs sm:text-sm px-2 sm:px-3'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1d21] text-xs sm:text-sm px-2 sm:px-3'
              }
            >
              <Users className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Collector</span>
            </Button>
            <Button
              onClick={() => setUserRole('vendor')}
              variant={userRole === 'vendor' ? 'default' : 'ghost'}
              size="sm"
              className={
                userRole === 'vendor'
                  ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white text-xs sm:text-sm px-2 sm:px-3'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1d21] text-xs sm:text-sm px-2 sm:px-3'
              }
            >
              <Store className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Vendor</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Role */}
      {userRole === 'collector' ? <CollectorView /> : <VendorView />}
    </div>
  );
}
