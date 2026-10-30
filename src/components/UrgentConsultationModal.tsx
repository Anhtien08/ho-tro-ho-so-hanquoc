import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { VisaCategoryCode } from '../types/visa';

interface UrgentConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVisaCode?: VisaCategoryCode;
}

export const UrgentConsultationModal: React.FC<UrgentConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultVisaCode = 'C-3-9',
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [visaType, setVisaType] = useState<VisaCategoryCode>(defaultVisaCode);
  const [hometown, setHometown] = useState<string>('Hà Nội');
  const [urgentNeed, setUrgentNeed] = useState<string>('Cần nộp gấp trong tuần này');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `V5S-URGENT-${randomSuffix}`;
    setReferenceCode(code);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#ED1B36] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-100 block">
                Phòng Thẩm Định Khẩn Cấp
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Đăng Ký Thẩm Định Hồ Sơ Khẩn Trong 30 Phút
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#ED1B36] shrink-0 mt-0.5" />
              <span>
                Chuyên viên cấp cao sẽ ưu tiên kết nối với bạn qua điện thoại hoặc Zalo ngay sau khi tiếp nhận thông tin (trong vòng 30 phút).
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Họ và tên quý khách <span className="text-[#ED1B36]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full h-12 bg-white border-1.5 border-[#E2E8F0] rounded-lg px-3.5 text-sm text-[#25283D] focus:outline-none focus:border-[#454BC0]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Số điện thoại / Zalo <span className="text-[#ED1B36]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="09xx xxx xxx"
                  className="w-full h-12 bg-white border-1.5 border-[#E2E8F0] rounded-lg px-3.5 text-sm text-[#25283D] focus:outline-none focus:border-[#454BC0]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Visa Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Diện Thị Thực Quan Tâm
                </label>
                <select
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value as VisaCategoryCode)}
                  className="w-full h-12 bg-white border-1.5 border-[#E2E8F0] rounded-lg px-3.5 text-sm font-medium text-[#25283D] focus:outline-none focus:border-[#454BC0]"
                >
                  <option value="C-3-9">C-3-9: Du Lịch Tự Túc / Thăm Thân</option>
                  <option value="D-2">D-2: Du Học Đại Học / Thạc Sĩ</option>
                  <option value="C-3-4">C-3-4: Thương Mại & Công Tác</option>
                </select>
              </div>

              {/* Hometown Region */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Hộ Khẩu Thường Trú
                </label>
                <select
                  value={hometown}
                  onChange={(e) => setHometown(e.target.value)}
                  className="w-full h-12 bg-white border-1.5 border-[#E2E8F0] rounded-lg px-3.5 text-sm font-medium text-[#25283D] focus:outline-none focus:border-[#454BC0]"
                >
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                  <option value="Hải Phòng">Hải Phòng</option>
                  <option value="Nghệ An / Hà Tĩnh">Nghệ An / Hà Tĩnh</option>
                  <option value="Các tỉnh thành khác">Các tỉnh thành khác</option>
                </select>
              </div>
            </div>

            {/* Urgent Need Reason */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Mức Độ Ưu Tiên & Nhu Cầu
              </label>
              <select
                value={urgentNeed}
                onChange={(e) => setUrgentNeed(e.target.value)}
                className="w-full h-12 bg-white border-1.5 border-[#E2E8F0] rounded-lg px-3.5 text-sm font-medium text-[#25283D] focus:outline-none focus:border-[#454BC0]"
              >
                <option value="Cần nộp gấp trong tuần này">Cần nộp gấp hồ sơ trong tuần này</option>
                <option value="Hồ sơ từng bị từ chối / Cần tái nộp khẩn">Hồ sơ từng bị từ chối / Cần tái nộp khẩn</option>
                <option value="Không có chứng minh thu nhập / Cần phương án tối ưu">Không có chứng minh thu nhập / Cần phương án tối ưu</option>
                <option value="Chuyến công tác / Sự kiện đột xuất tại Hàn">Chuyến công tác / Sự kiện đột xuất tại Hàn</option>
              </select>
            </div>

            {/* Free Note */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Mô tả sơ lược tình trạng hồ sơ (nếu có)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: Đã có vé máy bay ngày 15/11, chưa có sổ tiết kiệm..."
                className="w-full bg-white border-1.5 border-[#E2E8F0] rounded-lg p-3 text-xs sm:text-sm text-[#25283D] focus:outline-none focus:border-[#454BC0]"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#ED1B36] hover:bg-[#D6142E] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Xác Nhận Yêu Cầu Thẩm Định Khẩn</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center mt-2.5 text-[11px] text-slate-500">
                Cam kết bảo mật thông tin hồ sơ theo tiêu chuẩn ngoại giao.
              </div>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#161984] mb-2">
                Đã Tiếp Nhận Yêu Cầu Thẩm Định Khẩn Cấp!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Cảm ơn bạn <span className="font-semibold text-slate-900">{fullName}</span>. Hệ thống đã chuyển hồ sơ vào hàng đợi ưu tiên xử lý trong vòng 30 phút.
              </p>
            </div>

            {/* Reference Badge */}
            <div className="p-4 bg-[#F3F5FF] rounded-xl border border-[#30359A]/20 max-w-sm mx-auto">
              <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                Mã Biên Nhận Khẩn
              </div>
              <div className="text-xl font-mono font-black text-[#30359A]">
                {referenceCode}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Số điện thoại liên hệ: <span className="font-bold">{phoneNumber}</span>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              Cần hỗ trợ tức thì ngay lúc này? Vui lòng gọi trực tiếp hotline cấp tốc:{' '}
              <a href="tel:0911909686" className="text-[#ED1B36] font-bold underline">
                0911 909 686
              </a>{' '}
              hoặc{' '}
              <a href="tel:0967686101" className="text-[#ED1B36] font-bold underline">
                0967 686 101
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="py-2.5 px-6 bg-[#30359A] text-white text-xs font-semibold rounded-lg hover:bg-[#454BC0] transition-colors cursor-pointer"
            >
              Hoàn Tất & Đóng
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
