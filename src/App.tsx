import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisaCategories } from './components/VisaCategories';
import { EligibilityEvaluator } from './components/EligibilityEvaluator';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CaseStudies } from './components/CaseStudies';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { VisaDetailModal } from './components/VisaDetailModal';
import { UrgentConsultationModal } from './components/UrgentConsultationModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingCallButton } from './components/FloatingCallButton';
import { VisaCategory, VisaCategoryCode } from './types/visa';

export default function App() {
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState<VisaCategory | null>(null);
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState<boolean>(false);
  const [urgentVisaCode, setUrgentVisaCode] = useState<VisaCategoryCode>('C-3-9');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (code: VisaCategoryCode = 'C-3-9') => {
    setUrgentVisaCode(code);
    setIsUrgentModalOpen(true);
  };

  const handleDirectConsultationFromEvaluator = (data: {
    visaType: VisaCategoryCode;
    score: number;
    phone: string;
    name: string;
  }) => {
    setUrgentVisaCode(data.visaType);
    // User already received in-form confirmation, but can also open urgent modal if desired
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased flex flex-col font-sans selection:bg-[#161984] selection:text-white pb-[88px] lg:pb-0">
      {/* 1. Top Bar Navigation */}
      <Header
        onOpenUrgentModal={() => handleOpenConsultation('C-3-9')}
        onNavigate={scrollToSection}
      />

      {/* 2. Hero Section */}
      <Hero
        onStartEvaluation={() => scrollToSection('evaluator')}
        onOpenConsultation={() => handleOpenConsultation('C-3-9')}
      />

      {/* 3. Visa Categories Section */}
      <VisaCategories
        onSelectCategory={(category) => setSelectedCategoryForModal(category)}
        onOpenConsultationWithCategory={(code) => handleOpenConsultation(code)}
      />

      {/* 4. Interactive Online Eligibility Evaluator */}
      <EligibilityEvaluator
        onDirectConsultation={handleDirectConsultationFromEvaluator}
      />

      {/* 5. Process Roadmap */}
      <ProcessTimeline />

      {/* 6. Real Case Studies & Proof of Impact */}
      <CaseStudies
        onOpenConsultation={() => handleOpenConsultation('C-3-9')}
      />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Institutional Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenUrgentModal={() => handleOpenConsultation('C-3-9')}
      />

      {/* 11. Category Requirements & Checklist Modal */}
      <VisaDetailModal
        category={selectedCategoryForModal}
        onClose={() => setSelectedCategoryForModal(null)}
        onOpenConsultation={() => {
          if (selectedCategoryForModal) {
            handleOpenConsultation(selectedCategoryForModal.code);
          } else {
            handleOpenConsultation('C-3-9');
          }
        }}
      />

      {/* 12. Urgent Consultation Modal */}
      <UrgentConsultationModal
        isOpen={isUrgentModalOpen}
        onClose={() => setIsUrgentModalOpen(false)}
        defaultVisaCode={urgentVisaCode}
      />

      {/* 13. Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenConsultation={() => handleOpenConsultation('C-3-9')}
      />

      {/* 14. Floating Call & Hotline Popup at Bottom Right */}
      <FloatingCallButton
        primaryPhone="0911909686"
        secondaryPhone="0967686101"
      />
    </div>
  );
}
