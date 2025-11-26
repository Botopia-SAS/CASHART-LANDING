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
    valueLabel?: string;
}

export function TopProducts({ products, title = 'Top Products', valueLabel = 'sales' }: TopProductsProps) {
    return (
        <Card className="bg-[#252930] border-[#3a3f47]">
            <CardHeader>
                <CardTitle className="text-white text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#10B981]" />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2 sm:space-y-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 p-3 rounded-lg bg-[#1a1d21] border border-[#3a3f47] hover:border-[#10B981]/30 transition-colors"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs sm:text-sm font-bold flex-shrink-0">
                                    #{product.rank}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs sm:text-sm font-medium text-white break-words">{product.name}</p>
                                    <p className="text-xs text-gray-400">
                                        {product.sales} {valueLabel}
                                    </p>
                                </div>
                            </div>
                            <div className="text-left sm:text-right flex-shrink-0">
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
