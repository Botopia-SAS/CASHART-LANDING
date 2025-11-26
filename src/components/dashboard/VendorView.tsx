'use client';

import { MetricsCard } from './MetricsCard';
import { SalesChart } from './SalesChart';
import { RecentActivity } from './RecentActivity';
import { CategoryBreakdown } from './CategoryBreakdown';
import { TopProducts } from './TopProducts';
import { DollarSign, ShoppingCart, Package, TrendingUp } from 'lucide-react';

// Mock data for vendor view
const vendorMetrics = {
    payouts: {
        value: '$245,000',
        subtitle: 'Paid to partner galleries',
        trend: { value: 14.8, isPositive: true },
    },
    activePlans: {
        value: '128',
        subtitle: 'Collectors currently financing',
        trend: { value: 6.1, isPositive: true },
    },
    riskCoverage: {
        value: '0%',
        subtitle: 'CashArt risk exposure',
        trend: { value: 0, isPositive: true },
    },
    approvals: {
        value: '72',
        subtitle: 'Pre-approved buyers',
        trend: { value: 4.7, isPositive: true },
    },
};

const vendorSalesData = [
    { month: 'Jan', sales: 14500 },
    { month: 'Feb', sales: 16200 },
    { month: 'Mar', sales: 18800 },
    { month: 'Apr', sales: 20100 },
    { month: 'May', sales: 22400 },
    { month: 'Jun', sales: 23800 },
    { month: 'Jul', sales: 25600 },
    { month: 'Aug', sales: 24900 },
    { month: 'Sep', sales: 27200 },
    { month: 'Oct', sales: 28900 },
    { month: 'Nov', sales: 31500 },
    { month: 'Dec', sales: 33200 },
];

const vendorActivity = [
    {
        id: 'PLAN-1845',
        type: 'Instant payout issued for “Chromatic Energy”',
        amount: 18200,
        timestamp: '2 hours ago',
        status: 'completed' as const,
    },
    {
        id: 'PLAN-1844',
        type: 'Collector approved for “Modern Resonance”',
        amount: 12400,
        timestamp: '5 hours ago',
        status: 'processing' as const,
    },
    {
        id: 'PLAN-1840',
        type: 'Payment schedule synced with Flux Gallery',
        amount: 9800,
        timestamp: 'Nov 22, 3:15 PM',
        status: 'completed' as const,
    },
    {
        id: 'PLAN-1835',
        type: 'Digital series financed at 0% exposure',
        amount: 15490,
        timestamp: 'Nov 21, 11:42 AM',
        status: 'completed' as const,
    },
    {
        id: 'PLAN-1830',
        type: 'Collector requested term extension',
        amount: 6890,
        timestamp: 'Nov 20, 9:28 AM',
        status: 'pending' as const,
    },
];

const vendorCategories = [
    { name: 'Approved Collectors (US)', value: 82000, percentage: 34, color: '#10B981' },
    { name: 'Approved Collectors (EU)', value: 61000, percentage: 25, color: '#3B82F6' },
    { name: 'Institutional Buyers', value: 53800, percentage: 22, color: '#F59E0B' },
    { name: 'Private Advisors', value: 43200, percentage: 19, color: '#8B5CF6' },
];

const vendorTopProducts = [
    { id: 'FIN-010', name: '“Emerald Pulse” – Flux Gallery', sales: 18, revenue: 68490, rank: 1 },
    { id: 'FIN-009', name: '“City Fragments” – Atelier 27', sales: 15, revenue: 51200, rank: 2 },
    { id: 'FIN-008', name: 'Sculpture Capsule – Axis Collective', sales: 12, revenue: 43800, rank: 3 },
    { id: 'FIN-007', name: 'Digital Residency Drop', sales: 11, revenue: 39500, rank: 4 },
    { id: 'FIN-006', name: 'Modern Masters Series', sales: 9, revenue: 36200, rank: 5 },
];

export function VendorView() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <MetricsCard
                    title="Instant Payout Volume"
                    value={vendorMetrics.payouts.value}
                    subtitle={vendorMetrics.payouts.subtitle}
                    trend={vendorMetrics.payouts.trend}
                    icon={DollarSign}
                    iconColor="text-[#10B981]"
                    iconBgColor="bg-[#10B981]/10"
                />
                <MetricsCard
                    title="Active Payment Plans"
                    value={vendorMetrics.activePlans.value}
                    subtitle={vendorMetrics.activePlans.subtitle}
                    trend={vendorMetrics.activePlans.trend}
                    icon={ShoppingCart}
                    iconColor="text-blue-400"
                    iconBgColor="bg-blue-400/10"
                />
                <MetricsCard
                    title="Risk Exposure"
                    value={vendorMetrics.riskCoverage.value}
                    subtitle={vendorMetrics.riskCoverage.subtitle}
                    trend={vendorMetrics.riskCoverage.trend}
                    icon={Package}
                    iconColor="text-amber-400"
                    iconBgColor="bg-amber-400/10"
                />
                <MetricsCard
                    title="Collector Approvals"
                    value={vendorMetrics.approvals.value}
                    subtitle={vendorMetrics.approvals.subtitle}
                    trend={vendorMetrics.approvals.trend}
                    icon={TrendingUp}
                    iconColor="text-purple-400"
                    iconBgColor="bg-purple-400/10"
                />
            </div>

            {/* Sales Chart */}
            <SalesChart data={vendorSalesData} title="Financing Volume" />

            {/* Recent Activity and Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <RecentActivity activities={vendorActivity} title="Recent Activity" />
                <CategoryBreakdown categories={vendorCategories} title="Collector Segments" />
            </div>

            {/* Top Products */}
            <TopProducts
                products={vendorTopProducts}
                title="Most Financed Works"
                valueLabel="plans financed"
            />
        </div>
    );
}
