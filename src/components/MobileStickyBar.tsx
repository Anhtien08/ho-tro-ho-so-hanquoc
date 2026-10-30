import React from 'react';
import { PhoneCall, Sparkles } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] h-[72px] px-4 flex items-center shadow-[0_-4px_16px_0_rgba(37,40,61,0.06)]">
      <div className="w-full max-w-md mx-auto grid grid-cols-2 gap-3 items-center">
        {/* Direct Call / Zalo Secondary Button */}
        <a
          href="tel:0911909686"
          className="h-11 border-1.5 border-[#30359A] text-[#30359A] hover:bg-[#F3F5FF] active:bg-[#EAEFFF] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <PhoneCall className="w-4 h-4 text-[#30359A]" />
          <span>Hotline: 0911 909 686</span>
        </a>

        {/* Primary Consultation CTA Button */}
        <button
          onClick={onOpenConsultation}
          className="h-11 bg-[#30359A] hover:bg-[#454BC0] active:bg-[#161984] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Nhận Tư Vấn Ngay</span>
        </button>
      </div>
    </div>
  );
};
