"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Register your gallery in under 2 minutes. Join the CashArt platform and start offering flexible payment options to your collectors.
                    </p>
                    <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">Register</h3>
                        </div>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                            Quick and easy registration process for galleries and collectors
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Offer flexible financing to your clients. They choose to pay over time, and you get paid upfront.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-4 shadow-md">
                            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold mb-3">
                                💰
                            </div>
                            <h4 className="text-sm font-semibold text-teal-900 dark:text-teal-100 mb-2">Gallery Benefits</h4>
                            <p className="text-xs text-neutral-700 dark:text-neutral-300">Get paid immediately, no waiting</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-cyan-50 to-emerald-50 dark:from-cyan-900/20 dark:to-emerald-900/20 p-4 shadow-md">
                            <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold mb-3">
                                🎨
                            </div>
                            <h4 className="text-sm font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Collector Benefits</h4>
                            <p className="text-xs text-neutral-700 dark:text-neutral-300">Flexible payment plans</p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Increase your sales without operational burden or credit risk
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-2">
                            ✅ No credit risk for galleries
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-2">
                            ✅ Increase sales by up to 30%
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-2">
                            ✅ No operational burden
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 mb-2">
                            ✅ Immediate payment processing
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Simple integration process
                        </div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 p-6 shadow-xl">
                        <h4 className="text-white font-bold text-lg mb-2">Start Growing Today</h4>
                        <p className="text-white/90 text-sm">Join the art market revolution with CashArt</p>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
