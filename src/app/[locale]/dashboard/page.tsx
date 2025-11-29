"use client";

import { useState } from "react";
import { CollectorView } from "@/components/dashboard/CollectorView";
import { VendorView } from "@/components/dashboard/VendorView";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Store } from "lucide-react";

type UserRole = "collector" | "vendor";

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<UserRole>("vendor");

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header with Role Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
            Welcome to CashArt Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Discover, buy, and sell unique art pieces, or request financing by
            using your art as collateral. Join our pilot and help shape the
            future of art finance.
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <Badge
            className={
              userRole === "collector"
                ? "bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-center sm:text-left"
                : "bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-center sm:text-left"
            }
          >
            {userRole === "collector" ? "Collector" : "Vendor"}
          </Badge>

          <div className="flex items-center gap-1 sm:gap-2 p-1 rounded-lg bg-[#252930] border border-[#3a3f47]">
            <Button
              onClick={() => setUserRole("collector")}
              variant={userRole === "collector" ? "default" : "ghost"}
              size="sm"
              className={
                userRole === "collector"
                  ? "bg-[#10B981] hover:bg-[#10B981]/90 text-white text-xs sm:text-sm px-2 sm:px-3"
                  : "text-gray-400 hover:text-white hover:bg-[#1a1d21] text-xs sm:text-sm px-2 sm:px-3"
              }
            >
              <Users className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Collector</span>
            </Button>
            <Button
              onClick={() => setUserRole("vendor")}
              variant={userRole === "vendor" ? "default" : "ghost"}
              size="sm"
              className={
                userRole === "vendor"
                  ? "bg-[#10B981] hover:bg-[#10B981]/90 text-white text-xs sm:text-sm px-2 sm:px-3"
                  : "text-gray-400 hover:text-white hover:bg-[#1a1d21] text-xs sm:text-sm px-2 sm:px-3"
              }
            >
              <Store className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
              <span className="hidden sm:inline">Vendor</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Role */}
      {userRole === "collector" ? <CollectorView /> : <VendorView />}

      {/* Welcome Message & Actions */}

      {/* Welcome + Roadmap Side by Side */}

      <section className="mt-10 flex flex-col lg:flex-row gap-8 w-full max-w-[1800px] px-2 sm:px-4 mx-auto items-stretch min-h-[480px]">
        {/* Welcome Block */}
        <div className="flex-1 bg-linear-to-r from-[#1a1d21] to-[#23272f] rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col border border-[#23272f] justify-center min-h-[480px]">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Get Started
            </h2>
            <p className="text-gray-400 mb-4 max-w-2xl">
              Upload your introduction video, request to join the pilot, or
              download the onboarding PDF to begin your journey with CashArt.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full justify-between items-stretch flex-1">
            {/* Video Placeholder with Tooltip */}
            <div className="group relative flex flex-col items-center justify-center bg-[#23272f] border border-[#3a3f47] rounded-xl flex-1 min-w-[180px] max-w-md h-44 md:h-auto mx-auto md:mx-0 cursor-not-allowed">
              <svg
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-gray-500 mb-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 9V6.75A2.25 2.25 0 0 0 13.5 4.5h-7.5A2.25 2.25 0 0 0 3.75 6.75v10.5A2.25 2.25 0 0 0 6 19.5h7.5a2.25 2.25 0 0 0 2.25-2.25V15m3-3-3-3m3 3-3 3m3-3H9"
                />
              </svg>
              <span className="text-gray-500 text-sm">Upload your video</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-[#23272f] text-xs text-white px-3 py-1 rounded shadow border border-[#3a3f47] transition-opacity">
                Coming soon
              </span>
            </div>
            {/* Actions */}
            <div className="flex flex-col justify-center items-center gap-4 flex-1 max-w-md mx-auto md:mx-0">
              <a href="/en/survey" className="w-full">
                <button className="w-full px-6 py-3 bg-linear-to-r from-[#10B981] to-[#0C5F4C] text-white font-semibold rounded-lg shadow hover:from-[#0C5F4C] hover:to-[#10B981] transition-colors text-base">
                  Request to Join Pilot
                </button>
              </a>
              <div className="relative w-full">
                <button className="w-full px-6 py-3 bg-[#23272f] text-[#10B981] font-semibold rounded-lg border border-[#10B981] hover:bg-[#10B981] hover:text-white transition-colors text-base cursor-not-allowed group">
                  Download PDF
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none bg-[#23272f] text-xs text-white px-3 py-1 rounded shadow border border-[#10B981] transition-opacity">
                    Coming soon
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Roadmap Block */}
        <div className="flex-1 bg-[#181b20] border border-[#23272f] rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col justify-center min-h-[480px]">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
            Roadmap to Launch
          </h3>
          <ol className="relative border-l-2 border-[#10B981]/40 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-[#10B981] rounded-full ring-4 ring-[#181b20] text-white font-bold">
                1
              </span>
              <h4 className="font-semibold text-white">Private Pilot</h4>
              <p className="text-gray-400 text-sm">
                Invite early users, gather feedback, and iterate on features.
              </p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-[#10B981]/80 rounded-full ring-4 ring-[#181b20] text-white font-bold">
                2
              </span>
              <h4 className="font-semibold text-white">Beta Launch</h4>
              <p className="text-gray-400 text-sm">
                Open platform to a wider audience, expand inventory and
                financing options.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-[#10B981]/60 rounded-full ring-4 ring-[#181b20] text-white font-bold">
                3
              </span>
              <h4 className="font-semibold text-white">Public Release</h4>
              <p className="text-gray-400 text-sm">
                Full production launch with advanced features and global access.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
