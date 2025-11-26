'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    icon: LucideIcon;
    iconColor?: string;
    iconBgColor?: string;
}

export function MetricsCard({
    title,
    value,
    subtitle,
    trend,
    icon: Icon,
    iconColor = 'text-[#10B981]',
    iconBgColor = 'bg-[#10B981]/10',
}: MetricsCardProps) {
    return (
        <Card className="bg-[#252930] border-[#3a3f47] hover:border-[#10B981]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#10B981]/10">
            <CardContent className="p-6">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <p className="text-sm text-gray-400 mb-2">{title}</p>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-2xl font-bold text-white">{value}</h3>
                            {trend && (
                                <span
                                    className={cn(
                                        'text-sm font-medium',
                                        trend.isPositive ? 'text-green-400' : 'text-red-400'
                                    )}
                                >
                                    {trend.isPositive ? '+' : ''}
                                    {trend.value}%
                                </span>
                            )}
                        </div>
                        {subtitle && (
                            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
                        )}
                    </div>
                    <div className={cn('p-3 rounded-xl', iconBgColor)}>
                        <Icon className={cn('h-6 w-6', iconColor)} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
