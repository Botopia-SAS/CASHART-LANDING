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
    <div className="min-h-screen bg-[#1a1d21] space-y-6 lg:space-y-8 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
      {/* Header with Role Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">
            {userRole === 'collector'
              ? 'Track your art collection and market insights'
              : 'Manage your business with total control'}
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex items-center gap-3">
          <Badge
            className={
              userRole === 'collector'
                ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 px-4 py-1.5'
                : 'bg-blue-500/20 text-blue-400 border-blue-500/30 px-4 py-1.5'
            }
          >
            {userRole === 'collector' ? 'Collector' : 'Vendor'}
          </Badge>

          <div className="flex items-center gap-2 p-1 rounded-lg bg-[#252930] border border-[#3a3f47]">
            <Button
              onClick={() => setUserRole('collector')}
              variant={userRole === 'collector' ? 'default' : 'ghost'}
              size="sm"
              className={
                userRole === 'collector'
                  ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1d21]'
              }
            >
              <Users className="h-4 w-4 mr-2" />
              Collector
            </Button>
            <Button
              onClick={() => setUserRole('vendor')}
              variant={userRole === 'vendor' ? 'default' : 'ghost'}
              size="sm"
              className={
                userRole === 'vendor'
                  ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#1a1d21]'
              }
            >
              <Store className="h-4 w-4 mr-2" />
              Vendor
            </Button>
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Role */}
      {userRole === 'collector' ? <CollectorView /> : <VendorView />}
    </div>
  );
}
