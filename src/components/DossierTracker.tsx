import React, { useState } from 'react';
import { SAMPLE_DOSSIERS } from '../data/visaData';
import { DossierRecord } from '../types/visa';
import { Search, CheckCircle2, Clock, MapPin, User, Phone, AlertCircle, FileText, Calendar, Building, Printer } from 'lucide-react';

interface DossierTrackerProps {
  initialTrackingCode?: string;
}

export const DossierTracker: React.FC<DossierTrackerProps> = ({ initialTrackingCode = 'V5S-2024-8891' }) => {
  const [searchInput, setSearchInput] = useState<string>(initialTrackingCode);
  const [activeCode, setActiveCode] = useState<string>(initialTrackingCode);
  const [errorNotFound, setErrorNotFound] = useState<boolean>(false);

  const dossier: DossierRecord | undefined = SAMPLE_DOSSIERS[activeCode];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = searchInput.trim().toUpperCase();
    if (SAMPLE_DOSSIERS[cleanCode]) {
      setActiveCode(cleanCode);
      setErrorNotFound(false);
    } else {
      setErrorNotFound(true);
    }
  };

  const handleSelectSample = (code: string) => {
    setSearchInput(code);
    setActiveCode(code);
    setErrorNotFound(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="tracker" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-[#30359A] tracking-wider uppercase mb-2">
            HỆ THỐNG TRA CỨU TIẾN ĐỘ TRỰC TUYẾN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#161984] tracking-tight mb-3">
            Theo Dõi Hồ Sơ Thời Gian Thực
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dữ liệu được đồng bộ trực tiếp từ hệ thống tiếp nhận KVAC và Phòng Lãnh sự Đại sứ quán Hàn Quốc.
          </p>
        </div>

        {/* Search Bar & Sample Dossier Chips */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Nhập mã hồ sơ (ví dụ: V5S-2024-8891)"
                className="w-full h-12 bg-white border-1.5 border-[#E2E8F0] rounded-xl pl-11 pr-4 text-sm font-mono font-medium text-[#25283D] focus:outline-none focus:border-[#454BC0] shadow-2xs"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
            <button
              type="submit"
              className="h-12 bg-[#30359A] hover:bg-[#454BC0] text-white px-6 rounded-xl text-sm font-semibold transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              Tra Cứu Hồ Sơ
            </button>
          </form>

          {/* Sample click-to-fill tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Hồ sơ mẫu tra cứu:</span>
            {Object.keys(SAMPLE_DOSSIERS).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleSelectSample(code)}
                className={`px-2.5 py-1 rounded-md font-mono transition-colors cursor-pointer ${
                  activeCode === code
                    ? 'bg-[#30359A] text-white font-bold'
                    : 'bg-[#F3F5FF] text-[#30359A] hover:bg-slate-200'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          {errorNotFound && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                Không tìm thấy mã hồ sơ &ldquo;{searchInput}&rdquo;. Vui lòng thử chọn một trong các mã hồ sơ mẫu phía trên hoặc kiểm tra lại biên nhận từ 5S.
              </span>
            </div>
          )}
        </div>

        {/* Dossier Detail Card */}
        {dossier && (
          <div className="bg-[#FBF8FF] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm">
            {/* Top Dossier Meta Ribbon */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                  <span className="text-xl sm:text-2xl font-black text-[#161984] tracking-tight">
                    {dossier.applicantName}
                  </span>
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#30359A] text-white">
                    {dossier.trackingCode}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#ED1B36]/10 text-[#ED1B36] border border-[#ED1B36]/20">
                    Diện: {dossier.visaCode}
                  </span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-3 flex-wrap">
                  <span>Mục đích: {dossier.visaName}</span>
                  <span className="text-slate-300">·</span>
                  <span className="font-mono">Số biên nhận KVAC: {dossier.kvacAppNumber}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 text-right">
                  <div className="text-[11px] text-slate-500 font-medium">Dự kiến có kết quả:</div>
                  <div className="text-sm font-bold text-[#161984] flex items-center gap-1 justify-end">
                    <Calendar className="w-3.5 h-3.5 text-[#30359A]" /> {dossier.estimatedCompletion}
                  </div>
                </div>

                <button
                  onClick={handlePrint}
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer"
                  title="In biên nhận tra cứu"
                >
                  <Printer className="w-4 h-4" /> In Phiếu
                </button>
              </div>
            </div>

            {/* Spec Roadmap / Timeline Vector */}
            {/* Connecting nodes utilizing #30359A for completed milestones, #454BC0 with pulsing ring for current active phase, #E2E8F0 for future steps */}
            <div className="mb-10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                Tiến Trình Xử Lý Hồ Sơ
              </h4>

              {/* Desktop Stepper */}
              <div className="hidden md:block relative">
                {/* Horizontal Track Line */}
                <div className="absolute top-5 left-8 right-8 h-1 bg-[#E2E8F0] -z-0" />
                <div
                  className="absolute top-5 left-8 h-1 bg-[#30359A] -z-0 transition-all duration-500"
                  style={{
                    width: `${(dossier.currentStepIndex / (dossier.steps.length - 1)) * 90}%`,
                  }}
                />

                <div className="grid grid-cols-5 gap-3 relative z-10">
                  {dossier.steps.map((step, idx) => {
                    const isCompleted = step.status === 'completed';
                    const isCurrent = step.status === 'current';
                    return (
                      <div key={step.stepNumber} className="flex flex-col items-center text-center">
                        {/* Node circle */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                            isCompleted
                              ? 'bg-[#30359A] text-white shadow-sm'
                              : isCurrent
                              ? 'bg-[#454BC0] text-white ring-4 ring-[#454BC0]/30 animate-pulse'
                              : 'bg-white text-slate-400 border-2 border-[#E2E8F0]'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.stepNumber}
                        </div>

                        {/* Step title */}
                        <div className="mt-3 font-semibold text-xs text-[#161984] leading-snug">
                          {step.title}
                        </div>

                        {/* Step timestamp or status */}
                        <div className="mt-1 text-[11px] text-slate-500">
                          {step.timestamp ? (
                            <span className="font-mono text-[10px] text-slate-600 font-medium">
                              {step.timestamp}
                            </span>
                          ) : isCurrent ? (
                            <span className="text-[#454BC0] font-bold">Đang tiến hành</span>
                          ) : (
                            <span className="text-slate-400">Chờ hoàn tất</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Stepper (Vertical Stack) */}
              <div className="md:hidden space-y-4">
                {dossier.steps.map((step) => {
                  const isCompleted = step.status === 'completed';
                  const isCurrent = step.status === 'current';
                  return (
                    <div
                      key={step.stepNumber}
                      className={`flex items-start gap-3.5 p-3 rounded-xl border ${
                        isCurrent
                          ? 'bg-white border-[#454BC0] shadow-sm'
                          : 'bg-white/60 border-slate-200'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isCompleted
                            ? 'bg-[#30359A] text-white'
                            : isCurrent
                            ? 'bg-[#454BC0] text-white ring-2 ring-[#454BC0]/30'
                            : 'bg-slate-100 text-slate-400 border border-slate-200'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.stepNumber}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-[#161984]">{step.title}</h5>
                          {isCurrent && (
                            <span className="text-[10px] font-bold text-[#454BC0] bg-blue-50 px-1.5 py-0.5 rounded">
                              Đang thực hiện
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5">{step.description}</p>
                        {step.timestamp && (
                          <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                            {step.timestamp} · {step.location}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom 2-Card Info Strip */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-slate-200">
              {/* Consular Status & Official Note */}
              <div className="md:col-span-8 bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#30359A] uppercase tracking-wider mb-2">
                  <Building className="w-4 h-4" />
                  <span>Ghi Chú Tiến Độ Lãnh Sự</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                  {dossier.consularNote}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Điểm nộp: {dossier.kvacBranch}</span>
                </div>
              </div>

              {/* Dedicated Consultant Card */}
              <div className="md:col-span-4 bg-white rounded-xl p-5 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Chuyên Viên Phụ Trách Hồ Sơ
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#161984] text-white flex items-center justify-center font-bold text-sm">
                      {dossier.assignedConsultant.avatarInitials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#161984]">
                        {dossier.assignedConsultant.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {dossier.assignedConsultant.title}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${dossier.assignedConsultant.phone}`}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#F3F5FF] hover:bg-[#30359A] text-[#30359A] hover:text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Gọi Hotline: {dossier.assignedConsultant.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
