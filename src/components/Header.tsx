import React, { useState } from 'react';
import { PhoneCall, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { VisaLogo } from './VisaLogo';

interface HeaderProps {
  onOpenUrgentModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenUrgentModal, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_2px_8px_-2px_rgba(48,53,154,0.05)] transition-all">
      {/* Top micro bar for diplomatic assurance */}
      <div className="bg-[#161984] text-white text-[12px] font-medium py-1.5 px-4 hidden md:block">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300 shrink-0" />
            <span>Trung tâm Tư vấn Hỗ trợ & Thẩm định Hồ sơ Thị thực Hàn Quốc Tiêu chuẩn Ngoại Giao</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3 h-3 text-amber-300" />
              <span className="text-slate-300 text-[11px]">Hotline 24/7:</span>
              <a href="tel:0911909686" className="text-amber-300 hover:text-amber-200 font-bold">
                0911 909 686
              </a>
              <span className="text-slate-400">-</span>
              <a href="tel:0967686101" className="text-amber-300 hover:text-amber-200 font-bold">
                0967 686 101
              </a>
            </div>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">8:00 - 18:30 (T2 - T7)</span>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8 h-18">
          {/* Zone 1: Single brand wordmark element */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center text-[#161984] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 group py-1"
          >
            <VisaLogo size="sm" theme="light" showSubtitle={true} />
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#25283D]">
            <button
              onClick={() => handleNavClick('services')}
              className="hover:text-[#30359A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Hạng Mục Thị Thực
            </button>
            <button
              onClick={() => handleNavClick('evaluator')}
              className="hover:text-[#30359A] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
            >
              Đánh Giá Tỉ Lệ Đậu
              <span className="bg-[#ED1B36]/10 text-[#ED1B36] text-[11px] font-bold px-1.5 py-0.5 rounded">
                Hot
              </span>
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="hover:text-[#30359A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Quy Trình 5 Bước
            </button>
            <button
              onClick={() => handleNavClick('cases')}
              className="hover:text-[#30359A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Hồ Sơ Tiêu Biểu
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="hover:text-[#30359A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Hỏi Đáp KVAC
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenUrgentModal}
              className="inline-flex items-center gap-2 bg-[#ED1B36] hover:bg-[#D6142E] text-white text-sm font-semibold px-4.5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Thẩm Định Khẩn 30 Phút</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenUrgentModal}
              className="sm:hidden bg-[#ED1B36] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Khẩn
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 text-[15px] font-medium text-[#25283D]">
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2 px-3 rounded hover:bg-[#F3F5FF] hover:text-[#30359A]"
            >
              Hạng Mục Thị Thực Hàn Quốc
            </button>
            <button
              onClick={() => handleNavClick('evaluator')}
              className="text-left py-2 px-3 rounded hover:bg-[#F3F5FF] hover:text-[#30359A] flex items-center justify-between"
            >
              <span>Đánh Giá Tỉ Lệ Đậu Online</span>
              <span className="text-[11px] bg-[#ED1B36]/10 text-[#ED1B36] font-bold px-2 py-0.5 rounded">
                Miễn phí
              </span>
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="text-left py-2 px-3 rounded hover:bg-[#F3F5FF] hover:text-[#30359A]"
            >
              Quy Trình 5 Bước Ngoại Giao
            </button>
            <button
              onClick={() => handleNavClick('cases')}
              className="text-left py-2 px-3 rounded hover:bg-[#F3F5FF] hover:text-[#30359A]"
            >
              Hồ Sơ Tiêu Biểu & Giải Cứu
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 px-3 rounded hover:bg-[#F3F5FF] hover:text-[#30359A]"
            >
              Câu Hỏi Thường Gặp
            </button>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenUrgentModal();
                }}
                className="w-full text-center py-3 bg-[#ED1B36] text-white font-semibold rounded-lg shadow-sm"
              >
                Đăng Ký Thẩm Định Hồ Sơ Khẩn
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:0911909686"
                  className="text-center py-2.5 border border-[#30359A] text-[#30359A] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> 0911 909 686
                </a>
                <a
                  href="tel:0967686101"
                  className="text-center py-2.5 border border-[#30359A] text-[#30359A] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> 0967 686 101
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
