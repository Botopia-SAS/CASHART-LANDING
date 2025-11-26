'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Activity {
    id: string;
    type: string;
    amount: number;
    timestamp: string;
    status: 'completed' | 'pending' | 'processing';
}

interface RecentActivityProps {
    activities: Activity[];
    title?: string;
}

const statusConfig = {
    completed: { label: 'Completed', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    pending: { label: 'Pending', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
    processing: { label: 'Processing', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
};

export function RecentActivity({ activities, title = 'Recent Activity' }: RecentActivityProps) {
    return (
        <Card className="bg-[#252930] border-[#3a3f47]">
            <CardHeader>
                <CardTitle className="text-white text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-center justify-between p-4 rounded-lg bg-[#1a1d21] border border-[#3a3f47] hover:border-[#10B981]/30 transition-colors"
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-sm font-medium text-white">{activity.id}</span>
                                    <Badge className={cn('text-xs', statusConfig[activity.status].color)}>
                                        {statusConfig[activity.status].label}
                                    </Badge>
                                </div>
                                <p className="text-xs text-gray-400">{activity.type}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-white">
                                    ${activity.amount.toLocaleString()}
                                </p>
                                <p className="text-xs text-gray-500">{activity.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
