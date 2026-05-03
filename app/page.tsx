"use client"

import { LeftSidebar } from "@/components/portfolio/left-sidebar"
import { RightSidebar } from "@/components/portfolio/right-sidebar"
import { MobileNav } from "@/components/portfolio/mobile-nav"
import { ProfileSection } from "@/components/portfolio/profile-section"
import { KnowledgeSection } from "@/components/portfolio/knowledge-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { PortfolioSection } from "@/components/portfolio/portfolio-section"
import { Footer } from "@/components/portfolio/footer"

/**
 * Portfolio Page
 * Main SPA layout with 3-column structure:
 * - Left sidebar (25%): Personal info, skills, contact
 * - Center content (65%): Profile, knowledge, education, portfolio
 * - Right sidebar (10%): Social links
 * 
 * Mobile-first responsive design with collapsible sidebar
 */

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background flex justify-center items-start">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Left Sidebar - Fixed on desktop, hidden on mobile */}
      <LeftSidebar />

      {/* Main Content - Centered like PDF with side margins */}
      <main className="w-full lg:max-w-300 min-h-screen bg-card shadow-lg">
        <div className="px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
          <ProfileSection />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection />
          <Footer />
        </div>
      </main>

      {/* Right Sidebar - Fixed on desktop, hidden on mobile */}
      <RightSidebar />
    </div>
  )
}
