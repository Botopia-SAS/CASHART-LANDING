'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, TrendingUp, ShoppingBag, Users, Award } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Jan 15, 2025',
    title: 'Account Created',
    description: 'Welcome to ArtFintech! Your journey in art investment begins.',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    date: 'Jan 18, 2025',
    title: 'First Artwork Added',
    description: 'Added "Abstract Dreams" to your portfolio',
    icon: ShoppingBag,
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
  },
  {
    date: 'Jan 22, 2025',
    title: 'Portfolio Milestone',
    description: 'Portfolio value reached $100,000',
    icon: Award,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10',
  },
  {
    date: 'Jan 25, 2025',
    title: 'Market Analysis',
    description: 'Quarterly market analysis report generated',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
  },
  {
    date: 'Feb 1, 2025',
    title: 'Gallery Partnership',
    description: 'Connected with Modern Gallery NYC',
    icon: Users,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-500/10',
  },
  {
    date: 'Feb 5, 2025',
    title: 'Portfolio Growth',
    description: 'Your portfolio grew by 15% this month',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
  },
];

export default function TimelinePage() {
  const t = useTranslations('dashboard');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">{t('timeline')}</h1>
        <p className="text-muted-foreground mt-2">
          Your complete journey and milestones
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Activity Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border" />

            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} event={event} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <UpcomingEvent
              date="Feb 10, 2025"
              title="Quarterly Review"
              description="Scheduled portfolio performance review"
            />
            <UpcomingEvent
              date="Feb 15, 2025"
              title="Art Basel Miami"
              description="Exclusive preview access for collectors"
            />
            <UpcomingEvent
              date="Feb 20, 2025"
              title="Market Report"
              description="Q1 2025 Art Market Trends Report"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TimelineEvent({
  event,
}: {
  event: {
    date: string;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
    bgColor: string;
  };
}) {
  const Icon = event.icon;

  return (
    <div className="relative flex gap-6 items-start">
      <div className={`relative z-10 p-3 rounded-full ${event.bgColor}`}>
        <Icon className={`h-5 w-5 ${event.color}`} />
      </div>
      <div className="flex-1 pb-8">
        <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
        <h3 className="font-semibold text-lg">{event.title}</h3>
        <p className="text-muted-foreground mt-1">{event.description}</p>
      </div>
    </div>
  );
}

function UpcomingEvent({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="p-2 rounded-lg bg-purple-500/10">
        <Calendar className="h-5 w-5 text-purple-600" />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
