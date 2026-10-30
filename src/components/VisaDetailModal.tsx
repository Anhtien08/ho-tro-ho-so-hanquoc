import React, { useState } from 'react';
import { VisaCategory } from '../types/visa';
import { X, CheckSquare, Square, Download, Share2, AlertCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface VisaDetailModalProps {
  category: VisaCategory | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const VisaDetailModal: React.FC<VisaDetailModalProps> = ({
  category,
  onClose,
  onOpenConsultation,
}) => {
  if (!category) return null;

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const totalItems = category.requiredDocs.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  const handleDownload = () => {
    // Generate a clean text file checklist for download
    const lines = [
      `=== CHECKLIST HỒ SƠ THỊ THỰC HÀN QUỐC [${category.code}] - 5S ===`,
      `Tên diện thị thực: ${category.name}`,
      `Thời gian xét duyệt dự kiến: ${category.processingTime}`,
      `Thời hạn lưu trú: ${category.duration}`,
      '',
      ...category.requiredDocs.flatMap((section) => [
        `[${section.category}]`,
        ...section.items.map((item) => `- [ ] ${item}`),
        '',
      ]),
      'LƯU Ý QUAN TRỌNG:',
      ...category.criticalNotes.map((note) => `* ${note}`),
      '',
      'Hỗ trợ thẩm định hồ sơ: Hotline Hà Nội 0911 909 686 - TP.HCM 0967 686 101',
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Checklist-Thi-Thuc-${category.code}-5S.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#161984] text-white flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/20 text-white">
                Mã diện: {category.code}
              </span>
              <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Chuẩn Đại sứ quán & KVAC
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">{category.name}</h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick specs ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F3F5FF] p-3.5 rounded-xl text-xs">
            <div>
              <span className="text-slate-500 block">Thời gian xét duyệt:</span>
              <span className="font-bold text-[#161984]">{category.processingTime}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Thời hạn lưu trú:</span>
              <span className="font-bold text-[#161984]">{category.duration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 block">Tỉ lệ đậu trung bình:</span>
              <span className="font-bold text-[#ED1B36]">{category.passRate}</span>
            </div>
          </div>

          {/* Interactive Checklist Progress */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-[#161984]">
                Tiến độ chuẩn bị hồ sơ của bạn ({completedItems}/{totalItems} mục):
              </span>
              <span className="font-mono font-bold text-[#30359A]">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#30359A] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Categorized Document Checklist */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Danh Mục Hồ Sơ & Giấy Tờ Cần Chuẩn Bị
            </h4>

            {category.requiredDocs.map((section, sIdx) => (
              <div key={sIdx} className="border border-slate-200 rounded-xl p-4 bg-white">
                <h5 className="text-xs font-bold text-[#161984] uppercase tracking-wider mb-3 pb-2 border-b border-slate-100">
                  {section.category}
                </h5>
                <div className="space-y-2">
                  {section.items.map((doc, dIdx) => {
                    const isChecked = !!checkedItems[doc];
                    return (
                      <div
                        key={dIdx}
                        onClick={() => toggleCheck(doc)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg cursor-pointer transition-colors text-xs ${
                          isChecked ? 'bg-emerald-50/70 text-slate-900' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0 text-[#30359A]">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                        <span className={`leading-relaxed ${isChecked ? 'line-through text-slate-500' : ''}`}>
                          {doc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Critical Notes */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Lưu Ý Trọng Yếu Khi Chuẩn Bị Hồ Sơ</span>
            </div>
            <ul className="space-y-1 text-xs text-amber-950 pl-6 list-disc">
              {category.criticalNotes.map((note, nIdx) => (
                <li key={nIdx} className="leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Tải Danh Mục Checklist (.txt)</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Đóng Lại
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#30359A] hover:bg-[#454BC0] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Đăng Ký Thẩm Định Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
