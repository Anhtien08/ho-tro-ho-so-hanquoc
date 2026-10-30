import React, { useState } from 'react';
import { VISA_CATEGORIES } from '../data/visaData';
import { VisaCategory, VisaCategoryCode } from '../types/visa';
import { Plane, GraduationCap, Briefcase, HeartHandshake, Building2, Clock, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';

interface VisaCategoriesProps {
  onSelectCategory: (category: VisaCategory) => void;
  onOpenConsultationWithCategory: (code: VisaCategoryCode) => void;
}

export const VisaCategories: React.FC<VisaCategoriesProps> = ({
  onSelectCategory,
  onOpenConsultationWithCategory,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getCategoryIcon = (code: VisaCategoryCode) => {
    switch (code) {
      case 'C-3-9':
        return <Plane className="w-6 h-6 text-[#454BC0]" />;
      case 'D-2':
        return <GraduationCap className="w-6 h-6 text-[#454BC0]" />;
      case 'C-3-4':
        return <Building2 className="w-6 h-6 text-[#454BC0]" />;
      default:
        return <FileCheck className="w-6 h-6 text-[#454BC0]" />;
    }
  };

  const filteredCategories = VISA_CATEGORIES.filter((cat) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'travel') return cat.code === 'C-3-9';
    if (activeFilter === 'study') return cat.code === 'D-2';
    if (activeFilter === 'business') return cat.code === 'C-3-4';
    return true;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#161984] uppercase tracking-wider mb-3">
              <span>HẠNG MỤC THỊ THỰC TRỌNG ĐIỂM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              3 Diện Thị Thực Hàn Quốc Phổ Biến Nhất
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            5S tập trung chuyên sâu vào tư vấn hỗ trợ các diện thị thực du lịch tự túc, du học chính quy và thương mại công tác với tỉ lệ được cấp cao vượt trội.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl mb-10 overflow-x-auto scrollbar-none max-w-full w-fit">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#161984] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            Tất Cả ({VISA_CATEGORIES.length})
          </button>
          <button
            onClick={() => setActiveFilter('travel')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === 'travel'
                ? 'bg-[#161984] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            C-3-9 Du Lịch Tự Túc
          </button>
          <button
            onClick={() => setActiveFilter('study')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === 'study'
                ? 'bg-[#161984] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            D-2 / D-4 Du Học Chính Quy
          </button>
          <button
            onClick={() => setActiveFilter('business')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeFilter === 'business'
                ? 'bg-[#161984] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            C-3-4 Thương Mại & Công Tác
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-slate-200/90 hover:border-[#161984] rounded-2xl p-7 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Icon Well + Badges */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.code)}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 font-mono">
                      Mã: {category.code}
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Tỉ lệ đậu {category.passRate}
                    </span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#161984] transition-colors mb-2.5">
                  {category.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {category.shortDesc}
                </p>

                {/* Metadata details */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 mb-5 text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#161984]" /> Thời gian xét duyệt:
                    </span>
                    <span className="font-bold text-slate-900">{category.processingTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 font-medium">Thời hạn thị thực:</span>
                    <span className="font-semibold text-slate-900 text-right">{category.duration}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mb-6">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Ưu Điểm Nổi Bật:
                  </span>
                  <ul className="space-y-2">
                    {category.highlights.slice(0, 2).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-2.5">
                <button
                  onClick={() => onSelectCategory(category)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#161984] hover:bg-[#2025a8] text-white text-xs font-semibold py-3 px-3.5 rounded-xl transition-all shadow-2xs hover:shadow cursor-pointer"
                >
                  <span>Xem Checklist Chi Tiết</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenConsultationWithCategory(category.code)}
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-[#161984] text-xs font-semibold py-3 px-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  Tư Vấn
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
