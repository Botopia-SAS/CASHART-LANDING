'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Activity, Users } from 'lucide-react';
import { useAuthStore } from '@/lib/store/auth-store';

export default function OverviewPage() {
  const t = useTranslations('dashboard');
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.fullName}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Here's your art portfolio overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t('portfolio.totalValue')}
          value="$124,500"
          icon={<DollarSign className="h-5 w-5" />}
          trend="+12.5%"
          trendUp
        />
        <StatCard
          title={t('portfolio.growth')}
          value="+15.3%"
          icon={<TrendingUp className="h-5 w-5" />}
          trend="This month"
        />
        <StatCard
          title="Active Pieces"
          value="23"
          icon={<Activity className="h-5 w-5" />}
          trend="+3 this month"
        />
        <StatCard
          title="Network"
          value={user?.userType === 'gallery' ? '156 Collectors' : '12 Galleries'}
          icon={<Users className="h-5 w-5" />}
          trend="+8 this month"
        />
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>{t('recentActivity')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ActivityItem
              title="New artwork added"
              description="Abstract Composition #42 by Maria Santos"
              time="2 hours ago"
            />
            <ActivityItem
              title="Portfolio value updated"
              description="Your portfolio increased by 2.3%"
              time="5 hours ago"
            />
            <ActivityItem
              title="Connection request"
              description="Gallery Modern Art requested to connect"
              time="1 day ago"
            />
          </div>
        </CardContent>
      </Card>

      {/* Market Trends */}
      <Card>
        <CardHeader>
          <CardTitle>{t('marketTrends')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <TrendItem
              category="Contemporary Art"
              change="+8.2%"
              isPositive
            />
            <TrendItem
              category="Digital Art"
              change="+15.7%"
              isPositive
            />
            <TrendItem
              category="Sculpture"
              change="+3.1%"
              isPositive
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  trend,
  trendUp,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={`text-xs mt-1 ${trendUp ? 'text-green-600' : 'text-muted-foreground'}`}>
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="h-2 w-2 rounded-full bg-purple-600 mt-2" />
      <div className="flex-1 space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

function TrendItem({
  category,
  change,
  isPositive,
}: {
  category: string;
  change: string;
  isPositive: boolean;
}) {
  return (
    <div className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
      <span className="font-medium">{category}</span>
      <span className={isPositive ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
        {change}
      </span>
    </div>
  );
}
