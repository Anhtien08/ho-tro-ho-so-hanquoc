import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Building, Clock } from 'lucide-react';
import { VisaLogo } from './VisaLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenUrgentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenUrgentModal }) => {
  return (
    <footer className="bg-[#161984] text-white pt-16 pb-24 lg:pb-16 border-t border-blue-900/40">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-blue-800/60">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <VisaLogo size="lg" theme="dark" />
            </div>

            <p className="text-xs text-blue-100/80 leading-relaxed max-w-sm">
              Hệ thống tư vấn, tối ưu hóa hồ sơ và đại diện nộp thị thực Hàn Quốc chuyên nghiệp. Đồng hành cùng hàng chục ngàn người Việt hiện thực hóa hành trình công tác, du lịch, du học và định cư tại xứ sở Kim Chi.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Cam kết bảo mật dữ liệu khách hàng tuyệt đối</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Tư Vấn Hỗ Trợ Thị Thực
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Thị Thực Du Lịch C-3-9
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Thị Thực Du Học D-2 / D-4
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Thị Thực Thương Mại C-3-4
                </button>
              </li>
            </ul>
          </div>

          {/* Utility Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Tiện Ích Trực Tuyến
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>
                <button
                  onClick={() => onNavigate('evaluator')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Đánh Giá Tỉ Lệ Đậu Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Quy Trình 5 Bước Ngoại Giao
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cases')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hồ Sơ Tiêu Biểu Đã Cấp
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cẩm Nang & Hỏi Đáp Thị Thực
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUrgentModal}
                  className="text-rose-300 hover:text-rose-200 font-semibold cursor-pointer text-left"
                >
                  Đăng Ký Thẩm Định Khẩn
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Hệ Thống Văn Phòng & Hotline
            </h4>
            <div className="space-y-3 text-xs text-blue-100/80">
              {/* TP.HCM */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Trụ Sở TP. Hồ Chí Minh:</span>
                  370 Đường 3 Tháng 2, Phường 12, Quận 10, TP. Hồ Chí Minh
                  <div className="mt-0.5">
                    Hotline TP.HCM:{' '}
                    <a href="tel:0967686101" className="text-amber-300 font-bold hover:underline">
                      0967 686 101
                    </a>
                  </div>
                </div>
              </div>

              {/* Hanoi */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Văn Phòng Hà Nội:</span>
                  87 Vương Thừa Vũ, Phường Khương Mai, Quận Thanh Xuân, Hà Nội
                  <div className="mt-0.5">
                    Hotline Hà Nội:{' '}
                    <a href="tel:0911909686" className="text-amber-300 font-bold hover:underline">
                      0911 909 686
                    </a>
                  </div>
                </div>
              </div>

              {/* Binh Duong */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Văn Phòng Bình Dương:</span>
                  16 Trần Đại Nghĩa, Phường Bình An, TP. Dĩ An, Tỉnh Bình Dương
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-blue-800/40">
                <span className="text-slate-300 text-[11px]">Tổng đài 24/7:</span>
                <a href="tel:0911909686" className="flex items-center gap-1 text-amber-300 hover:underline font-bold">
                  <Phone className="w-3.5 h-3.5" /> 0911 909 686
                </a>
                <span className="text-blue-300">-</span>
                <a href="tel:0967686101" className="flex items-center gap-1 text-amber-300 hover:underline font-bold">
                  <Phone className="w-3.5 h-3.5" /> 0967 686 101
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-blue-200/60 text-center md:text-left">
          <p>
            &copy; 2026 5S Consulting System. All rights reserved. Tiêu chuẩn tư vấn hỗ trợ thị thực Hàn Quốc.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Lưu ý miễn trừ: 5S là đơn vị tư vấn hỗ trợ và đại diện ủy thác chuẩn bị hồ sơ hợp pháp; quyền quyết định cấp hoặc từ chối thị thực thuộc thẩm quyền duy nhất của Đại sứ quán và Tổng Lãnh sự quán Đại Hàn Dân Quốc tại Việt Nam.
          </p>
        </div>
      </div>
    </footer>
  );
};
