import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/visaData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#161984] uppercase tracking-wider mb-3">
            <span>GIẢI ĐÁP PHÁP LÝ & KINH NGHIỆM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Những Câu Hỏi Thường Gặp Về Thị Thực Hàn Quốc
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Tổng hợp các thắc mắc phổ biến nhất về thủ tục chứng minh tài chính, điều kiện cấp thị thực và quy chế nộp tại KVAC.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi (ví dụ: hộ chiếu trắng, tài chính, phỏng vấn...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#161984] focus:bg-white transition-all shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'general', label: 'Quy định chung' },
              { id: 'financial', label: 'Tài chính' },
              { id: 'kvac', label: 'Nộp KVAC' },
              { id: 'interview', label: 'Phỏng vấn' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#161984] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border border-[#161984]/50 shadow-sm'
                    : 'bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? 'text-[#161984]' : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#161984]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-blue-100/60 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
