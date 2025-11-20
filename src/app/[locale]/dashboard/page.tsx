'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Play, FileText, Download } from 'lucide-react';
import { useAuthStore } from '@/lib/store/auth-store';
import { Button } from '@/components/ui/button';

export default function OverviewPage() {
  const t = useTranslations('dashboard');
  const user = useAuthStore((state) => state.user);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro before
    const hasSeenIntro = sessionStorage.getItem('hasSeenDashboardIntro');
    
    if (hasSeenIntro) {
      setShowIntro(false);
      return;
    }

    // Auto hide after video duration (adjust timing as needed)
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('hasSeenDashboardIntro', 'true');
      }, 500);
    }, 2300); // Adjusted for 1.5x speed

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('hasSeenDashboardIntro', 'true');
    }, 500);
  };

  if (showIntro) {
    return (
      <div 
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transition-opacity duration-500 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            video.playbackRate = 2;
          }}
        >
          <source src="https://res.cloudinary.com/dcljjtnxr/video/upload/v1763663129/_prompt_create_202511200212_savnoq.mp4" type="video/mp4" />
        </video>
        <button
          onClick={handleSkip}
          className="absolute top-8 right-8 px-4 py-2 text-sm font-medium text-white bg-black/20 hover:bg-black/40 rounded-lg backdrop-blur-sm transition-colors z-10"
        >
          Skip
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with Badge */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Early Access Dashboard</h1>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 text-[#0C5F4C] dark:text-[#10B981] text-sm font-medium border border-[#0C5F4C]/20 dark:border-[#10B981]/20">
          Waitlist Member
        </div>
      </div>

      {/* Welcome Card with Calendar Icon */}
      <Card className="border-[#0C5F4C]/20 dark:border-[#10B981]/20 bg-gradient-to-br from-[#0C5F4C]/5 to-transparent dark:from-[#10B981]/5 hover:shadow-lg transition-all duration-300 group">
        <CardContent className="pt-6">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-[#0C5F4C] dark:text-[#10B981]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">Welcome to CashArt Early Access</h2>
              <p className="text-muted-foreground mb-4">
                You are officially on the waitlist. We are preparing for our official launch in{' '}
                <span className="font-semibold text-[#0C5F4C] dark:text-[#10B981]">April 2026</span>. 
                Explore the dashboard to learn more about our vision and roadmap.
              </p>
              <div className="inline-flex px-4 py-2 rounded-lg bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 text-sm font-medium text-[#0C5F4C] dark:text-[#10B981]">
                Launch: April 2026
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Roadmap */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl">Product Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <RoadmapPhase
              quarter="Q4"
              year="2025"
              title="Private Alpha"
              description="Founding galleries test core platform features and provide feedback."
              color="teal"
              status="current"
            />
            <RoadmapPhase
              quarter="Q1"
              year="2026"
              title="Expanded Beta"
              description="Onboard additional galleries and refine collector experience."
              color="teal"
            />
            <RoadmapPhase
              quarter="APR"
              year="2026"
              title="Official Launch"
              description="Full platform release with all features available worldwide."
              color="yellow"
              status="upcoming"
            />
          </div>
        </CardContent>
      </Card>

      {/* Bottom Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* The Vision of CashArt */}
        <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border-[#0C5F4C]/20 dark:border-[#10B981]/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 group-hover:bg-[#0C5F4C]/20 dark:group-hover:bg-[#10B981]/20 transition-colors duration-300">
                <Play className="h-6 w-6 text-[#0C5F4C] dark:text-[#10B981] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#0C5F4C] dark:group-hover:text-[#10B981] transition-colors">
                  The Vision of CashArt
                </h3>
                <p className="text-sm text-muted-foreground">
                  A brief film on how we are partnering with galleries to empower the next generation of art collectors.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-[#0C5F4C]/20 dark:border-[#10B981]/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-[#0C5F4C]/10 dark:bg-[#10B981]/10 group-hover:bg-[#0C5F4C]/20 dark:group-hover:bg-[#10B981]/20 transition-colors duration-300">
                <FileText className="h-6 w-6 text-[#0C5F4C] dark:text-[#10B981]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Resources</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download materials to learn more about CashArt and share with your team.
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-[#0C5F4C]/30 dark:border-[#10B981]/30 text-[#0C5F4C] dark:text-[#10B981] hover:bg-[#0C5F4C]/10 dark:hover:bg-[#10B981]/10 group/btn"
            >
              <Download className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
              Download One-Pager (PDF)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function RoadmapPhase({
  quarter,
  year,
  title,
  description,
  color,
  status,
}: {
  quarter: string;
  year: string;
  title: string;
  description: string;
  color: 'teal' | 'yellow';
  status?: 'current' | 'upcoming';
}) {
  const badgeColor = color === 'teal' 
    ? 'bg-[#0C5F4C] dark:bg-[#10B981] text-white' 
    : 'bg-yellow-500 text-gray-900';

  return (
    <div className="group relative p-6 rounded-xl border border-border hover:border-[#0C5F4C]/40 dark:hover:border-[#10B981]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className={`px-3 py-1 rounded-lg text-sm font-bold ${badgeColor} group-hover:scale-110 transition-transform duration-300`}>
          {quarter}
        </div>
        <span className="text-sm text-muted-foreground font-medium">{year}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#0C5F4C] dark:group-hover:text-[#10B981] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      {status === 'current' && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#0C5F4C] dark:bg-[#10B981] rounded-full animate-pulse" />
      )}
    </div>
  );
}
