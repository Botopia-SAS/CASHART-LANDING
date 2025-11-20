'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/store/auth-store';
import { Mail, Phone, User, Building2 } from 'lucide-react';

export default function YourInfoPage() {
  const t = useTranslations('dashboard');
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">{t('yourInfo')}</h1>
        <p className="text-muted-foreground mt-2">
          Your personal information and account details
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <InfoRow
            icon={<User className="h-5 w-5" />}
            label="Full Name"
            value={user?.fullName || 'N/A'}
          />
          <InfoRow
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={user?.email || 'N/A'}
          />
          <InfoRow
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value={`${user?.countryCode} ${user?.phone}` || 'N/A'}
          />
          <InfoRow
            icon={<Building2 className="h-5 w-5" />}
            label="Account Type"
            value={user?.userType === 'gallery' ? 'Gallery' : 'Collector'}
          />
          {user?.userType === 'gallery' && user.galleryName && (
            <InfoRow
              icon={<Building2 className="h-5 w-5" />}
              label="Gallery Name"
              value={user.galleryName}
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <StatBox label="Member Since" value="Jan 2025" />
            <StatBox label="Total Artworks" value="23" />
            <StatBox label="Total Transactions" value="47" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="text-muted-foreground">{icon}</div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-lg border bg-card">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
