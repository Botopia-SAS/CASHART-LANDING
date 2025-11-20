'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, AlertCircle, TrendingUp } from 'lucide-react';

export default function StatusPage() {
  const t = useTranslations('dashboard');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">{t('status')}</h1>
        <p className="text-muted-foreground mt-2">
          Current status of your portfolio and activities
        </p>
      </div>

      {/* Portfolio Status */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-500/10">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">Excellent</p>
                <p className="text-sm text-muted-foreground">
                  Your portfolio is performing above average
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-500/10">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">Verified</p>
                <p className="text-sm text-muted-foreground">
                  Your account is fully verified
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <TransactionItem
              title="Artwork Acquisition"
              description="Pending approval for 'Sunset Boulevard' by Alex Chen"
              status="pending"
              date="2 days ago"
            />
            <TransactionItem
              title="Portfolio Valuation"
              description="Monthly valuation update in progress"
              status="in-progress"
              date="Today"
            />
            <TransactionItem
              title="Gallery Partnership"
              description="Contract signed with Modern Gallery NYC"
              status="completed"
              date="1 week ago"
            />
          </div>
        </CardContent>
      </Card>

      {/* Market Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Market Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <OpportunityItem
              title="Emerging Artists"
              description="3 new artists matching your portfolio style"
              impact="High"
            />
            <OpportunityItem
              title="Auction Alert"
              description="Upcoming auction featuring similar pieces"
              impact="Medium"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TransactionItem({
  title,
  description,
  status,
  date,
}: {
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
}) {
  const statusConfig = {
    pending: {
      icon: <Clock className="h-5 w-5 text-yellow-600" />,
      bg: 'bg-yellow-500/10',
    },
    'in-progress': {
      icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
      bg: 'bg-blue-500/10',
    },
    completed: {
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      bg: 'bg-green-500/10',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className={`p-2 rounded-lg ${config.bg}`}>{config.icon}</div>
      <div className="flex-1 space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
  );
}

function OpportunityItem({
  title,
  description,
  impact,
}: {
  title: string;
  description: string;
  impact: string;
}) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="p-2 rounded-lg bg-purple-500/10">
        <AlertCircle className="h-5 w-5 text-purple-600" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-600">
            {impact} Impact
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
