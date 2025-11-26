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
            <CardContent className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 truncate">{title}</p>
                        <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-bold text-white break-words">{value}</h3>
                            {trend && (
                                <span
                                    className={cn(
                                        'text-xs sm:text-sm font-medium whitespace-nowrap',
                                        trend.isPositive ? 'text-green-400' : 'text-red-400'
                                    )}
                                >
                                    {trend.isPositive ? '+' : ''}
                                    {trend.value}%
                                </span>
                            )}
                        </div>
                        {subtitle && (
                            <p className="text-xs text-gray-500 mt-1 truncate">{subtitle}</p>
                        )}
                    </div>
                    <div className={cn('p-2 sm:p-3 rounded-xl flex-shrink-0', iconBgColor)}>
                        <Icon className={cn('h-5 w-5 sm:h-6 sm:w-6', iconColor)} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
