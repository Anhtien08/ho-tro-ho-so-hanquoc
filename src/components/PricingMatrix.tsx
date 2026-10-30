import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/visaData';
import { PricingPlan } from '../types/visa';
import { Check, ShieldCheck, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingMatrixProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingMatrix: React.FC<PricingMatrixProps> = ({ onSelectPlan }) => {
  const [showFeeTable, setShowFeeTable] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-[#F3F5FF] border-b border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#30359A] tracking-wider uppercase mb-2">
            CHI PHÍ TƯ VẤN HỖ TRỢ MINH BẠCH
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#161984] tracking-tight mb-3">
            Chi Phí Trọn Gói - Cam Kết Không Phát Sinh
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chính sách hoàn chi phí hỗ trợ nếu hồ sơ không được tiếp nhận theo đúng cam kết trong hợp đồng tư vấn hỗ trợ.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'bg-white border-2 border-[#30359A] shadow-xl md:-translate-y-2'
                  : 'bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#30359A] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Lựa Chọn Phổ Biến Nhất
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-[#161984] mb-2">{plan.title}</h3>
                <p className="text-xs text-slate-500 mb-5 min-h-[32px]">{plan.idealFor}</p>

                {/* Price Display */}
                <div className="mb-6 pb-5 border-b border-slate-100">
                  <div className="text-3xl sm:text-4xl font-black text-[#161984] tabular-nums tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    {plan.govFeeIncluded ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Đã gồm lệ phí Lãnh sự & KVAC
                      </span>
                    ) : (
                      <span>Chưa bao gồm lệ phí nộp KVAC</span>
                    )}
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Quyền lợi bao gồm:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#F3F5FF] flex items-center justify-center shrink-0 mt-0.5 text-[#30359A]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-[#30359A] hover:bg-[#454BC0] text-white shadow-md hover:shadow-lg'
                    : 'bg-[#F3F5FF] hover:bg-slate-200 text-[#30359A]'
                }`}
              >
                {plan.ctaLabel}
              </button>
            </div>
          ))}
        </div>

        {/* Toggleable Official Government & KVAC Fee Table */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
          <button
            onClick={() => setShowFeeTable(!showFeeTable)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3F5FF] flex items-center justify-center text-[#30359A]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#161984]">
                  Bảng Kê Chi Tiết Lệ Phí Nhà Nước & Phí Tiếp Nhận KVAC (Niêm Yết Công Khai)
                </h4>
                <p className="text-xs text-slate-500">
                  Nhấn để xem biểu phí chính thức thu bởi Đại sứ quán Hàn Quốc và KVAC
                </p>
              </div>
            </div>
            <div className="text-slate-400 hover:text-slate-600">
              {showFeeTable ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {showFeeTable && (
            <div className="mt-6 pt-6 border-t border-slate-100 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#F8F9FE] text-slate-700 font-bold border-b border-slate-200">
                    <th className="py-3 px-4">Khoản Mục Chi Phí</th>
                    <th className="py-3 px-4">Đơn Vị Thu</th>
                    <th className="py-3 px-4 text-right">Mức Phí Quy Định</th>
                    <th className="py-3 px-4">Ghi Chú Pháp Lý</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#161984]">
                      Lệ phí xét duyệt Thị thực du lịch ngắn hạn (&le; 90 ngày)
                    </td>
                    <td className="py-3 px-4">Đại sứ quán / Tổng Lãnh sự</td>
                    <td className="py-3 px-4 text-right font-mono font-bold">20 USD (~500.000 VNĐ)</td>
                    <td className="py-3 px-4 text-slate-500">Nộp bằng USD hoặc VNĐ theo tỉ giá</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#161984]">
                      Lệ phí xét duyệt Thị thực nhiều lần (Multiple 5 năm)
                    </td>
                    <td className="py-3 px-4">Đại sứ quán / Tổng Lãnh sự</td>
                    <td className="py-3 px-4 text-right font-mono font-bold">80 USD (~2.000.000 VNĐ)</td>
                    <td className="py-3 px-4 text-slate-500">Dành cho cư dân đủ điều kiện</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#161984]">
                      Phí tiếp nhận hồ sơ KVAC
                    </td>
                    <td className="py-3 px-4">Trung tâm Tiếp Nhận Thị Thực Hàn Quốc KVAC</td>
                    <td className="py-3 px-4 text-right font-mono font-bold">390.000 VNĐ / bộ</td>
                    <td className="py-3 px-4 text-slate-500">Phí bắt buộc cho mọi đương sự</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#161984]">
                      Dịch thuật công chứng tư pháp tiếng Anh/Hàn
                    </td>
                    <td className="py-3 px-4">Phòng Tư pháp Nhà nước</td>
                    <td className="py-3 px-4 text-right font-mono font-bold">120.000 - 150.000 VNĐ / trang</td>
                    <td className="py-3 px-4 text-slate-500">Miễn phí trọn gói trong Gói Chuẩn & VIP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
