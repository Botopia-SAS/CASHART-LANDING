'use client';

import { MetricsCard } from './MetricsCard';
import { SalesChart } from './SalesChart';
import { RecentActivity } from './RecentActivity';
import { CategoryBreakdown } from './CategoryBreakdown';
import { TopProducts } from './TopProducts';
import { DollarSign, ShoppingCart, Package, TrendingUp } from 'lucide-react';

// Mock data for vendor view
const vendorMetrics = {
    revenue: { value: '$156,789', trend: { value: 12.3, isPositive: true } },
    orders: { value: '342', trend: { value: 8.2, isPositive: true } },
    products: { value: '1,247', trend: { value: -2.1, isPositive: false } },
    conversion: { value: '3.2%', trend: { value: 0.5, isPositive: true } },
};

const vendorSalesData = [
    { month: 'Jan', sales: 8500 },
    { month: 'Feb', sales: 9200 },
    { month: 'Mar', sales: 11000 },
    { month: 'Apr', sales: 10500 },
    { month: 'May', sales: 13000 },
    { month: 'Jun', sales: 12800 },
    { month: 'Jul', sales: 15200 },
    { month: 'Aug', sales: 14500 },
    { month: 'Sep', sales: 16800 },
    { month: 'Oct', sales: 18200 },
    { month: 'Nov', sales: 19500 },
    { month: 'Dec', sales: 21000 },
];

const vendorActivity = [
    {
        id: 'ORD-010',
        type: 'Contemporary Art Sale',
        amount: 1590,
        timestamp: 'hace 2 horas',
        status: 'completed' as const,
    },
    {
        id: 'ORD-009',
        type: 'Modern Sculpture',
        amount: 1199,
        timestamp: 'hace 5 horas',
        status: 'processing' as const,
    },
    {
        id: 'ORD-008',
        type: 'Abstract Print',
        amount: 1040,
        timestamp: 'Nov 22, 3:15 PM',
        status: 'completed' as const,
    },
    {
        id: 'ORD-007',
        type: 'Digital Art Bundle',
        amount: 1549,
        timestamp: 'Nov 21, 11:42 AM',
        status: 'completed' as const,
    },
    {
        id: 'ORD-006',
        type: 'Classic Portrait',
        amount: 689,
        timestamp: 'Nov 20, 9:28 AM',
        status: 'pending' as const,
    },
];

const vendorCategories = [
    { name: 'Contemporary Art', value: 52000, percentage: 33, color: '#10B981' },
    { name: 'Modern Art', value: 41500, percentage: 26, color: '#3B82F6' },
    { name: 'Abstract', value: 35200, percentage: 23, color: '#F59E0B' },
    { name: 'Digital/NFT', value: 28089, percentage: 18, color: '#8B5CF6' },
];

const vendorTopProducts = [
    { id: 'PROD-010', name: 'Limited Edition Print', sales: 28, revenue: 8449, rank: 1 },
    { id: 'PROD-009', name: 'Contemporary Canvas', sales: 24, revenue: 7199, rank: 2 },
    { id: 'PROD-008', name: 'Abstract Series', sales: 19, revenue: 5040, rank: 3 },
    { id: 'PROD-007', name: 'Digital Collection', sales: 15, revenue: 4549, rank: 4 },
    { id: 'PROD-006', name: 'Sculpture Set', sales: 12, revenue: 3689, rank: 5 },
];

export function VendorView() {
    return (
        <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricsCard
                    title="Monthly Revenue"
                    value={vendorMetrics.revenue.value}
                    subtitle="Last 30 days"
                    trend={vendorMetrics.revenue.trend}
                    icon={DollarSign}
                    iconColor="text-[#10B981]"
                    iconBgColor="bg-[#10B981]/10"
                />
                <MetricsCard
                    title="Total Orders"
                    value={vendorMetrics.orders.value}
                    subtitle="Orders processed"
                    trend={vendorMetrics.orders.trend}
                    icon={ShoppingCart}
                    iconColor="text-blue-400"
                    iconBgColor="bg-blue-400/10"
                />
                <MetricsCard
                    title="Products Sold"
                    value={vendorMetrics.products.value}
                    subtitle="Total units"
                    trend={vendorMetrics.products.trend}
                    icon={Package}
                    iconColor="text-amber-400"
                    iconBgColor="bg-amber-400/10"
                />
                <MetricsCard
                    title="Conversion Rate"
                    value={vendorMetrics.conversion.value}
                    subtitle="Visitor to buyer"
                    trend={vendorMetrics.conversion.trend}
                    icon={TrendingUp}
                    iconColor="text-purple-400"
                    iconBgColor="bg-purple-400/10"
                />
            </div>

            {/* Sales Chart */}
            <SalesChart data={vendorSalesData} title="Monthly Sales" />

            {/* Recent Activity and Categories */}
            <div className="grid gap-4 lg:grid-cols-2">
                <RecentActivity activities={vendorActivity} title="Recent Activity" />
                <CategoryBreakdown categories={vendorCategories} title="Sales by Category" />
            </div>

            {/* Top Products */}
            <TopProducts products={vendorTopProducts} title="Top Products" />
        </div>
    );
}
