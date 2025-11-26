'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    sales: number;
    revenue: number;
    rank: number;
}

interface TopProductsProps {
    products: Product[];
    title?: string;
}

export function TopProducts({ products, title = 'Top Products' }: TopProductsProps) {
    return (
        <Card className="bg-[#252930] border-[#3a3f47]">
            <CardHeader>
                <CardTitle className="text-white text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#10B981]" />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-[#1a1d21] border border-[#3a3f47] hover:border-[#10B981]/30 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-bold">
                                    #{product.rank}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{product.name}</p>
                                    <p className="text-xs text-gray-400">{product.sales} sales</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-[#10B981]">
                                    ${product.revenue.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
