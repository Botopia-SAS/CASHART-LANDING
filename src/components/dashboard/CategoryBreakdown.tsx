'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
    name: string;
    value: number;
    percentage: number;
    color: string;
}

interface CategoryBreakdownProps {
    categories: Category[];
    title?: string;
}

export function CategoryBreakdown({ categories, title = 'Sales by Category' }: CategoryBreakdownProps) {
    return (
        <Card className="bg-[#252930] border-[#3a3f47]">
            <CardHeader>
                <CardTitle className="text-white text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 sm:space-y-4">
                    {categories.map((category) => (
                        <div key={category.name}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                                <span className="text-xs sm:text-sm text-gray-300 truncate">{category.name}</span>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                                        ${category.value.toLocaleString()}
                                    </span>
                                    <span className="text-xs text-gray-400 w-10 sm:w-12 text-right">
                                        {category.percentage}%
                                    </span>
                                </div>
                            </div>
                            <div className="w-full h-2 bg-[#1a1d21] rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{
                                        width: `${category.percentage}%`,
                                        backgroundColor: category.color,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
