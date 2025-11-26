'use client';

import { MetricsCard } from './MetricsCard';
import { SalesChart } from './SalesChart';
import { RecentActivity } from './RecentActivity';
import { CategoryBreakdown } from './CategoryBreakdown';
import { TopProducts } from './TopProducts';
import { Palette, TrendingUp, Eye, Activity } from 'lucide-react';

// Mock data for collector view
const collectorMetrics = {
    collectionValue: { value: '$248,350', trend: { value: 15.2, isPositive: true } },
    artworksOwned: { value: '47', trend: { value: 3, isPositive: true } },
    recentAcquisitions: { value: '8', trend: { value: 12.5, isPositive: true } },
    appreciation: { value: '18.4%', trend: { value: 2.1, isPositive: true } },
};

const collectorSalesData = [
    { month: 'Jan', sales: 18000 },
    { month: 'Feb', sales: 21000 },
    { month: 'Mar', sales: 19500 },
    { month: 'Apr', sales: 24000 },
    { month: 'May', sales: 28000 },
    { month: 'Jun', sales: 26500 },
    { month: 'Jul', sales: 31000 },
    { month: 'Aug', sales: 29000 },
    { month: 'Sep', sales: 35000 },
    { month: 'Oct', sales: 33000 },
    { month: 'Nov', sales: 38000 },
    { month: 'Dec', sales: 42000 },
];

const collectorActivity = [
    {
        id: 'ACQ-012',
        type: 'Contemporary Painting',
        amount: 15000,
        timestamp: 'Nov 2, 2:45 PM',
        status: 'completed' as const,
    },
    {
        id: 'ACQ-011',
        type: 'Modern Sculpture',
        amount: 8500,
        timestamp: 'Oct 15, 11:20 AM',
        status: 'completed' as const,
    },
    {
        id: 'ACQ-010',
        type: 'Abstract Print',
        amount: 3200,
        timestamp: 'Sep 28, 4:10 PM',
        status: 'completed' as const,
    },
    {
        id: 'ACQ-009',
        type: 'Digital Art NFT',
        amount: 12000,
        timestamp: 'Sep 5, 9:30 AM',
        status: 'pending' as const,
    },
];

const collectorCategories = [
    { name: 'Contemporary Art', value: 95000, percentage: 38, color: '#10B981' },
    { name: 'Modern Sculptures', value: 72000, percentage: 29, color: '#3B82F6' },
    { name: 'Abstract Paintings', value: 48000, percentage: 19, color: '#F59E0B' },
    { name: 'Digital/NFT Art', value: 33350, percentage: 14, color: '#8B5CF6' },
];

const collectorTopPieces = [
    { id: 'ART-045', name: 'Sunset Boulevard', sales: 1, revenue: 45000, rank: 1 },
    { id: 'ART-032', name: 'Urban Dreams', sales: 1, revenue: 38000, rank: 2 },
    { id: 'ART-078', name: 'Abstract Motion', sales: 1, revenue: 32000, rank: 3 },
    { id: 'ART-019', name: 'Golden Hour', sales: 1, revenue: 28500, rank: 4 },
    { id: 'ART-063', name: 'Digital Waves', sales: 1, revenue: 24000, rank: 5 },
];

export function CollectorView() {
    return (
        <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricsCard
                    title="Total Collection Value"
                    value={collectorMetrics.collectionValue.value}
                    subtitle="Last 30 days"
                    trend={collectorMetrics.collectionValue.trend}
                    icon={Palette}
                    iconColor="text-[#10B981]"
                    iconBgColor="bg-[#10B981]/10"
                />
                <MetricsCard
                    title="Artworks Owned"
                    value={collectorMetrics.artworksOwned.value}
                    subtitle="Total pieces"
                    trend={collectorMetrics.artworksOwned.trend}
                    icon={Eye}
                    iconColor="text-blue-400"
                    iconBgColor="bg-blue-400/10"
                />
                <MetricsCard
                    title="Recent Acquisitions"
                    value={collectorMetrics.recentAcquisitions.value}
                    subtitle="This quarter"
                    trend={collectorMetrics.recentAcquisitions.trend}
                    icon={TrendingUp}
                    iconColor="text-amber-400"
                    iconBgColor="bg-amber-400/10"
                />
                <MetricsCard
                    title="Appreciation Rate"
                    value={collectorMetrics.appreciation.value}
                    subtitle="Avg. annual growth"
                    trend={collectorMetrics.appreciation.trend}
                    icon={Activity}
                    iconColor="text-purple-400"
                    iconBgColor="bg-purple-400/10"
                />
            </div>

            {/* Sales Chart */}
            <SalesChart data={collectorSalesData} title="Collection Value Over Time" />

            {/* Recent Activity and Categories */}
            <div className="grid gap-4 lg:grid-cols-2">
                <RecentActivity activities={collectorActivity} title="Recent Acquisitions" />
                <CategoryBreakdown categories={collectorCategories} title="Collection by Category" />
            </div>

            {/* Top Pieces */}
            <TopProducts products={collectorTopPieces} title="Most Valuable Pieces" />
        </div>
    );
}
