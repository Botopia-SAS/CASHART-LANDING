'use client';

import { MetricsCard } from './MetricsCard';
import { SalesChart } from './SalesChart';
import { RecentActivity } from './RecentActivity';
import { CategoryBreakdown } from './CategoryBreakdown';
import { TopProducts } from './TopProducts';
import { Palette, TrendingUp, Eye, Activity } from 'lucide-react';

// Mock data for collector view
const collectorMetrics = {
    availableCredit: { value: '$320,000', trend: { value: 9.1, isPositive: true } },
    activePlans: { value: '5', trend: { value: 2, isPositive: true } },
    partnerGalleries: { value: '18', trend: { value: 12, isPositive: true } },
    approvalRate: { value: '94%', trend: { value: 1.4, isPositive: true } },
};

const collectorSalesData = [
    { month: 'Jan', sales: 22000 },
    { month: 'Feb', sales: 24000 },
    { month: 'Mar', sales: 26000 },
    { month: 'Apr', sales: 27500 },
    { month: 'May', sales: 30000 },
    { month: 'Jun', sales: 32000 },
    { month: 'Jul', sales: 33500 },
    { month: 'Aug', sales: 35500 },
    { month: 'Sep', sales: 37800 },
    { month: 'Oct', sales: 39200 },
    { month: 'Nov', sales: 41800 },
    { month: 'Dec', sales: 44500 },
];

const collectorActivity = [
    {
        id: 'ACQ-012',
        type: 'Flexible plan activated for “Luminous Rift”',
        amount: 18000,
        timestamp: 'Nov 24, 2:45 PM',
        status: 'completed' as const,
    },
    {
        id: 'ACQ-011',
        type: 'Upgrade approved at Atelier 27',
        amount: 9200,
        timestamp: 'Nov 12, 11:20 AM',
        status: 'completed' as const,
    },
    {
        id: 'ACQ-010',
        type: 'Payment pause scheduled for “Monumental Form”',
        amount: 3600,
        timestamp: 'Oct 28, 4:10 PM',
        status: 'completed' as const,
    },
    {
        id: 'ACQ-009',
        type: 'Pre-approval requested for Art Basel Miami',
        amount: 22000,
        timestamp: 'Oct 05, 9:30 AM',
        status: 'pending' as const,
    },
];

const collectorCategories = [
    { name: 'Payment Plans (6-12m)', value: 128000, percentage: 40, color: '#10B981' },
    { name: 'Payment Plans (12-24m)', value: 98000, percentage: 31, color: '#3B82F6' },
    { name: 'Paid in Full', value: 58000, percentage: 18, color: '#F59E0B' },
    { name: 'Digital/NFT Holdings', value: 38000, percentage: 11, color: '#8B5CF6' },
];

const collectorTopPieces = [
    { id: 'ART-045', name: '“Sunset Boulevard” – Flux Gallery', sales: 1, revenue: 45000, rank: 1 },
    { id: 'ART-032', name: '“Urban Dreams” – Axis Collective', sales: 1, revenue: 38000, rank: 2 },
    { id: 'ART-078', name: '“Abstract Motion” – Nova Atelier', sales: 1, revenue: 32000, rank: 3 },
    { id: 'ART-019', name: '“Golden Hour” – Lumina Studio', sales: 1, revenue: 28500, rank: 4 },
    { id: 'ART-063', name: '“Digital Waves” – MetaLab', sales: 1, revenue: 24000, rank: 5 },
];

export function CollectorView() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <MetricsCard
                    title="Available Credit"
                    value={collectorMetrics.availableCredit.value}
                    subtitle="CashArt limit"
                    trend={collectorMetrics.availableCredit.trend}
                    icon={Palette}
                    iconColor="text-[#10B981]"
                    iconBgColor="bg-[#10B981]/10"
                />
                <MetricsCard
                    title="Active Plans"
                    value={collectorMetrics.activePlans.value}
                    subtitle="Flexible schedules"
                    trend={collectorMetrics.activePlans.trend}
                    icon={Eye}
                    iconColor="text-blue-400"
                    iconBgColor="bg-blue-400/10"
                />
                <MetricsCard
                    title="Partner Galleries"
                    value={collectorMetrics.partnerGalleries.value}
                    subtitle="Direct relationships"
                    trend={collectorMetrics.partnerGalleries.trend}
                    icon={TrendingUp}
                    iconColor="text-amber-400"
                    iconBgColor="bg-amber-400/10"
                />
                <MetricsCard
                    title="Approval Rate"
                    value={collectorMetrics.approvalRate.value}
                    subtitle="Same-day decisions"
                    trend={collectorMetrics.approvalRate.trend}
                    icon={Activity}
                    iconColor="text-purple-400"
                    iconBgColor="bg-purple-400/10"
                />
            </div>

            {/* Sales Chart */}
            <SalesChart data={collectorSalesData} title="Collecting Power Over Time" />

            {/* Recent Activity and Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <RecentActivity activities={collectorActivity} title="Financing Activity" />
                <CategoryBreakdown categories={collectorCategories} title="Payment Mix" />
            </div>

            {/* Top Pieces */}
            <TopProducts
                products={collectorTopPieces}
                title="Highlighted Works"
                valueLabel="appraisals"
            />
        </div>
    );
}
