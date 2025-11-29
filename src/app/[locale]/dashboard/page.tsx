"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar, Lock, BarChart3, DollarSign, ShieldCheck, Download, FileText, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
            Early Access Dashboard
          </h1>
          <Badge className="bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30 px-3 py-1 text-xs">
            Waitlist Member
          </Badge>
        </div>
      </div>

      {/* Welcome to CashArt Early Access Card */}
      <section className="mt-8">
        <div className="bg-gradient-to-br from-[#1a1d21] via-[#1f2328] to-[#23272f] rounded-2xl border border-[#2d3139] p-8 sm:p-10 shadow-xl">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-[#10B981]/10 rounded-xl flex items-center justify-center border border-[#10B981]/20">
              <Calendar className="w-8 h-8 text-[#10B981]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Welcome to CashArt Early Access
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-3xl">
                You are officially on the waitlist. We are preparing for our official launch in{" "}
                <span className="text-[#10B981] font-semibold">April 2026</span>. Explore the dashboard to learn more about our vision and roadmap.
              </p>
              <button className="px-6 py-2.5 bg-[#23272f] hover:bg-[#2d3139] text-[#10B981] font-medium rounded-lg border border-[#10B981]/30 transition-all duration-200">
                Launch: April 2026
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-6">Product Roadmap</h3>
        <div className="bg-gradient-to-br from-[#1a1d21] to-[#1f2328] rounded-2xl border border-[#2d3139] p-8 sm:p-10 shadow-xl">
          {/* Progress Bar Container */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center border-4 border-[#0C5F4C] shadow-lg shadow-[#10B981]/30">
                  <span className="text-sm font-bold text-white">Q4</span>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">2025</p>
                  <p className="text-sm font-semibold text-white">Current Phase</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/40 flex items-center justify-center border-4 border-[#10B981]/20 relative">
                  <span className="text-sm font-bold text-white">Q1</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">2026</p>
                  <p className="text-sm font-semibold text-gray-300">Next Milestone</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#23272f] flex items-center justify-center border-4 border-[#3a3f47]">
                  <span className="text-sm font-bold text-gray-500">APR</span>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">2026</p>
                  <p className="text-sm font-semibold text-gray-400">Launch</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-3 bg-[#23272f] rounded-full overflow-hidden border border-[#3a3f47]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] via-[#10B981] to-[#0C5F4C] rounded-full shadow-lg shadow-[#10B981]/30"
                   style={{ width: "35%" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Roadmap Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Q4 2025 - Private Alpha */}
            <div className="bg-[#23272f] border-2 border-[#10B981] rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981]/10 rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-[#10B981] text-white border-none px-3 py-1 text-xs font-semibold">
                    Q4 2025
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Private Alpha</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Founding galleries test core platform features and provide feedback.
                </p>
              </div>
            </div>

            {/* Q1 2026 - Expanded Beta */}
            <div className="bg-[#1a1d21] border-2 border-[#10B981]/50 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981]/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-[#10B981]/80 text-white border-none px-3 py-1 text-xs font-semibold">
                    Q1 2026
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-[#10B981]/50 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Expanded Beta</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Onboard additional galleries and refine collector experience.
                </p>
              </div>
            </div>

            {/* APR 2026 - Official Launch */}
            <div className="bg-[#181b20] border-2 border-[#3a3f47] rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gray-700/5 rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-[#3a3f47] text-gray-300 border-none px-3 py-1 text-xs font-semibold">
                    APR 2026
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-[#3a3f47] flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Official Launch</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Full platform release with all features available worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resources Card */}
          <div className="bg-gradient-to-br from-[#1a1d21] to-[#1f2328] rounded-2xl border border-[#2d3139] p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-[#10B981]/10 rounded-xl flex items-center justify-center border border-[#10B981]/20">
                <FileText className="w-7 h-7 text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Resources</h3>
                <p className="text-gray-400 text-sm">
                  Download materials to learn more about CashArt and share with your team.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between px-5 py-4 bg-[#23272f] hover:bg-[#2d3139] rounded-xl border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-[#10B981]" />
                  <span className="text-white font-medium">Download One-Pager (PDF)</span>
                </div>
                <div className="text-gray-400 group-hover:text-[#10B981] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              <button className="w-full flex items-center justify-between px-5 py-4 bg-[#23272f] hover:bg-[#2d3139] rounded-xl border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#10B981]" />
                  <span className="text-white font-medium">Request to Join Pilot Program</span>
                </div>
                <div className="text-gray-400 group-hover:text-[#10B981] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Questions or Feedback Card */}
          <div className="bg-gradient-to-br from-[#10B981]/10 via-[#0C5F4C]/5 to-transparent rounded-2xl border border-[#10B981]/20 p-8 shadow-xl flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Questions or Feedback?</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-md">
              We're building CashArt with galleries like yours in mind. Share your thoughts or reach out to our team.
            </p>
            <button className="px-8 py-3 bg-[#10B981] hover:bg-[#0C5F4C] text-white font-semibold rounded-xl shadow-lg shadow-[#10B981]/20 hover:shadow-[#10B981]/30 transition-all duration-200 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features (Coming Soon) */}
      <section className="mt-8 mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">Platform Features (Coming Soon)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Deals */}
          <div className="bg-gradient-to-br from-[#1a1d21] to-[#1f2328] rounded-xl border border-[#2d3139] p-6 relative overflow-hidden group hover:border-[#3a3f47] transition-all duration-200">
            <div className="absolute top-4 right-4 text-gray-600">
              <Lock className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-[#23272f] rounded-lg flex items-center justify-center mb-4 border border-[#3a3f47] group-hover:border-[#10B981]/20 transition-all">
              <BarChart3 className="w-6 h-6 text-gray-500 group-hover:text-[#10B981]/50 transition-colors" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Deals</h4>
            <p className="text-gray-500 text-sm">Track and manage all your art financing deals</p>
          </div>

          {/* Clients */}
          <div className="bg-gradient-to-br from-[#1a1d21] to-[#1f2328] rounded-xl border border-[#2d3139] p-6 relative overflow-hidden group hover:border-[#3a3f47] transition-all duration-200">
            <div className="absolute top-4 right-4 text-gray-600">
              <Lock className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-[#23272f] rounded-lg flex items-center justify-center mb-4 border border-[#3a3f47] group-hover:border-[#10B981]/20 transition-all">
              <Users className="w-6 h-6 text-gray-500 group-hover:text-[#10B981]/50 transition-colors" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Clients</h4>
            <p className="text-gray-500 text-sm">Manage collector relationships and profiles</p>
          </div>

          {/* Payments */}
          <div className="bg-gradient-to-br from-[#1a1d21] to-[#1f2328] rounded-xl border border-[#2d3139] p-6 relative overflow-hidden group hover:border-[#3a3f47] transition-all duration-200">
            <div className="absolute top-4 right-4 text-gray-600">
              <Lock className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-[#23272f] rounded-lg flex items-center justify-center mb-4 border border-[#3a3f47] group-hover:border-[#10B981]/20 transition-all">
              <DollarSign className="w-6 h-6 text-gray-500 group-hover:text-[#10B981]/50 transition-colors" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Payments</h4>
            <p className="text-gray-500 text-sm">Monitor payment schedules and transactions</p>
          </div>

          {/* Risk Analytics */}
          <div className="bg-gradient-to-br from-[#1a1d21] to-[#1f2328] rounded-xl border border-[#2d3139] p-6 relative overflow-hidden group hover:border-[#3a3f47] transition-all duration-200">
            <div className="absolute top-4 right-4 text-gray-600">
              <Lock className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-[#23272f] rounded-lg flex items-center justify-center mb-4 border border-[#3a3f47] group-hover:border-[#10B981]/20 transition-all">
              <ShieldCheck className="w-6 h-6 text-gray-500 group-hover:text-[#10B981]/50 transition-colors" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Risk Analytics</h4>
            <p className="text-gray-500 text-sm">View risk assessments and approval rates</p>
          </div>
        </div>
      </section>
    </div>
  );
}
