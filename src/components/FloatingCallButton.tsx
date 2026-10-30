import React, { useState } from 'react';
import { Phone, PhoneCall, X, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

interface FloatingCallButtonProps {
  primaryPhone?: string;
  secondaryPhone?: string;
}

export const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({
  primaryPhone = '0911909686',
  secondaryPhone = '0967686101',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const formattedPrimary = '0911 909 686';
  const formattedSecondary = '0967 686 101';

  return (
    <aside aria-label="Hỗ trợ hotline" className="fixed bottom-24 lg:bottom-7 right-4 lg:right-7 z-50 flex flex-col items-end">
      {/* Expanded Popup Card */}
      {isOpen && (
        <div className="mb-3 w-[290px] sm:w-[320px] bg-white rounded-2xl shadow-[0_12px_36px_-6px_rgba(22,25,132,0.22)] border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-[#161984] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-amber-300 animate-bounce" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight">Tư Vấn Hỗ Trợ 5S 24/7</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Chuyên viên đang trực tuyến</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Đóng popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-xs text-slate-600 leading-relaxed">
              Quý khách cần thẩm định hồ sơ thị thực Hàn Quốc khẩn? Hãy kết nối ngay với chúng tôi:
            </p>

            {/* Main Primary Call Button */}
            <a
              href={`tel:${primaryPhone}`}
              className="flex items-center justify-between p-3 rounded-xl bg-[#ED1B36] hover:bg-[#D6142E] text-white shadow-sm transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-rose-100 block">
                    Hotline Chính (Hà Nội & Toàn Quốc)
                  </span>
                  <span className="text-base font-black tracking-wide font-mono">
                    {formattedPrimary}
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold bg-white text-[#ED1B36] px-2 py-1 rounded-md">
                Gọi Ngay
              </span>
            </a>

            {/* Secondary Call & Zalo Row */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${secondaryPhone}`}
                className="flex flex-col p-2.5 rounded-xl border border-slate-200 hover:border-[#30359A] hover:bg-[#F3F5FF] text-left transition-colors"
              >
                <span className="text-[10px] text-slate-500 font-medium">Hotline TP.HCM</span>
                <span className="text-xs font-bold text-[#161984] font-mono mt-0.5">
                  {formattedSecondary}
                </span>
              </a>

              <a
                href={`https://zalo.me/${primaryPhone}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nhắn Zalo</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Phục vụ từ 8h00 - 22h00 mọi ngày trong tuần</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button with pulsing aura waves */}
      <div className="relative group flex items-center">
        {/* Tooltip on desktop when closed */}
        {!isOpen && (
          <div className="hidden md:flex items-center mr-3 py-1.5 px-3 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-slate-200 text-xs font-bold text-[#161984] pointer-events-none transition-all group-hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
            <span>Gọi ngay: {formattedPrimary}</span>
          </div>
        )}

        {/* Pulse wave ring 1 */}
        <span className="absolute -inset-1.5 rounded-full bg-[#ED1B36]/30 animate-ping pointer-events-none" />

        {/* Pulse wave ring 2 */}
        <span className="absolute -inset-3 rounded-full bg-[#30359A]/15 animate-pulse pointer-events-none" />

        {/* Main round action button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Gọi điện thoại hotline 5S"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#ED1B36] to-[#ff4d63] text-white shadow-[0_8px_25px_rgba(237,27,54,0.45)] hover:shadow-[0_10px_30px_rgba(237,27,54,0.6)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer z-10"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <PhoneCall className="w-7 h-7 text-white animate-[wiggle_1s_ease-in-out_infinite]" />
          )}
        </button>
      </div>
    </aside>
  );
};
