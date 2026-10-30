import React, { useState } from 'react';
import { EligibilityInputs, EligibilityEvaluationResult, VisaCategoryCode } from '../types/visa';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Send,
  Plane,
  GraduationCap,
  Building2,
  Briefcase,
  Store,
  Laptop,
  Coins,
  ShieldCheck,
  Compass,
  Check,
} from 'lucide-react';

interface EligibilityEvaluatorProps {
  onDirectConsultation: (data: { visaType: VisaCategoryCode; score: number; phone: string; name: string }) => void;
}

const initialInputs: EligibilityInputs = {
  visaType: 'C-3-9',
  employmentType: 'fulltime_insured',
  monthlyIncome: '15m_30m',
  travelHistory: 'asean_only',
  savingsAmount: '100m_200m',
  hometownRegion: 'big_city',
  hasPriorRefusal: false,
};

export const EligibilityEvaluator: React.FC<EligibilityEvaluatorProps> = ({ onDirectConsultation }) => {
  const [step, setStep] = useState<number>(1);
  const [inputs, setInputs] = useState<EligibilityInputs>(initialInputs);
  const [result, setResult] = useState<EligibilityEvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [submittedReport, setSubmittedReport] = useState<boolean>(false);

  const calculateEvaluation = () => {
    setIsEvaluating(true);

    setTimeout(() => {
      let baseScore = 70;
      const strengths: string[] = [];
      const riskFactors: string[] = [];
      const actionRecommendations: string[] = [];
      const recommendedDocs: string[] = [];

      // Context
      if (inputs.visaType === 'C-3-9') {
        recommendedDocs.push('Hộ chiếu gốc còn hạn trên 6 tháng', 'CCCD gắn chip', 'Đơn xin cấp thị thực dán ảnh chuẩn 3.5x4.5');
      } else if (inputs.visaType === 'D-2') {
        recommendedDocs.push('Thư mời nhập học của trường', 'Bằng cấp và học bạ hợp pháp hóa', 'Chứng chỉ ngoại ngữ TOPIK/IELTS');
      } else if (inputs.visaType === 'C-3-4') {
        recommendedDocs.push('Thư mời công tác từ đối tác Hàn Quốc', 'Quyết định cử đi công tác', 'Hợp đồng lao động & ĐKKD công ty');
      }

      // Employment
      if (inputs.employmentType === 'fulltime_insured') {
        baseScore += 14;
        strengths.push('Có HĐLĐ và đóng BHXH đầy đủ (chứng minh sự ràng buộc công việc rất mạnh).');
        recommendedDocs.push('Hợp đồng lao động + Đơn xin nghỉ phép có dấu công ty', 'Bản chụp quá trình đóng BHXH trên app VssID');
      } else if (inputs.employmentType === 'business_owner') {
        baseScore += 15;
        strengths.push('Là chủ doanh nghiệp/hộ kinh doanh có đăng ký hợp pháp và báo cáo thuế rõ ràng.');
        recommendedDocs.push('Giấy phép đăng ký kinh doanh & Tờ khai thuế 3 tháng gần nhất');
      } else if (inputs.employmentType === 'freelancer') {
        baseScore -= 5;
        riskFactors.push('Nghề nghiệp tự do cần bổ sung tài liệu giải trình dòng tiền thu nhập đều đặn.');
        actionRecommendations.push('Cần sao kê tài khoản nhận tiền thù lao từ đối tác tối thiểu 6 tháng liên tục.');
        recommendedDocs.push('Sao kê tài khoản ngân hàng nhận thù lao công việc', 'Hợp đồng cộng tác hoặc sản phẩm truyền thông');
      } else if (inputs.employmentType === 'student') {
        baseScore += 6;
        strengths.push('Học sinh/sinh viên được xét bảo lãnh tài chính trực tiếp từ bố mẹ.');
        recommendedDocs.push('Thẻ sinh viên / Giấy xác nhận trường', 'Hồ sơ công việc & tài chính của bố mẹ');
      } else if (inputs.employmentType === 'retired') {
        baseScore += 10;
        strengths.push('Người nghỉ hưu có lương hưu ổn định, hồ sơ xét duyệt thuận lợi.');
        recommendedDocs.push('Sổ hưu trí hoặc quyết định nghỉ hưu', 'Sao kê tài khoản nhận lương hưu');
      }

      // Income
      if (inputs.monthlyIncome === 'over_50m') {
        baseScore += 10;
        strengths.push('Thu nhập trên 50 triệu/tháng khẳng định năng lực tài chính vượt trội.');
      } else if (inputs.monthlyIncome === '30m_50m') {
        baseScore += 8;
        strengths.push('Thu nhập 30 - 50 triệu/tháng rất lý tưởng để nộp hồ sơ thị thực Hàn Quốc.');
      } else if (inputs.monthlyIncome === '15m_30m') {
        baseScore += 5;
        strengths.push('Mức thu nhập ổn định, đáp ứng tốt yêu cầu theo chuẩn Lãnh sự.');
      } else {
        baseScore -= 4;
        riskFactors.push('Thu nhập dưới 15 triệu/tháng nên có thêm sổ tiết kiệm hoặc tài sản hỗ trợ.');
        actionRecommendations.push('Nên có sổ tiết kiệm tối thiểu 100 triệu gửi trên 1 tháng.');
      }

      // Travel History
      if (inputs.travelHistory === 'developed_oecd' || inputs.travelHistory === 'korea_visited') {
        baseScore += 12;
        strengths.push('Đã từng đi các nước phát triển (Nhật, Hàn, Châu Âu, Mỹ, Úc) là điểm cộng lớn.');
      } else if (inputs.travelHistory === 'asean_only') {
        baseScore += 5;
        strengths.push('Có lịch sử xuất cảnh các nước Đông Nam Á giúp hộ chiếu không bị trắng.');
      } else {
        baseScore -= 4;
        riskFactors.push('Hộ chiếu trắng (chưa từng đi nước ngoài).');
        actionRecommendations.push('5S sẽ hỗ trợ tối ưu hồ sơ công việc và viết thư giải trình mục đích rõ ràng.');
      }

      // Savings
      if (inputs.savingsAmount === 'over_500m_assets') {
        baseScore += 10;
        strengths.push('Có tài sản lớn (sổ tiết kiệm >500 triệu, nhà đất hoặc ô tô đứng tên).');
        recommendedDocs.push('Sổ hồng/sổ đỏ nhà đất hoặc giấy đăng ký ô tô');
      } else if (inputs.savingsAmount === '200m_500m') {
        baseScore += 7;
        strengths.push('Sổ tiết kiệm 200 - 500 triệu vượt mức chuẩn tối thiểu.');
        recommendedDocs.push('Sổ tiết kiệm gốc và Giấy xác nhận số dư song ngữ');
      } else if (inputs.savingsAmount === '100m_200m') {
        baseScore += 4;
        strengths.push('Sổ tiết kiệm đạt mức chuẩn quy định (100 - 120 triệu đồng).');
        recommendedDocs.push('Sổ tiết kiệm tối thiểu 100 triệu gửi từ 1 tháng');
      } else if (inputs.savingsAmount === 'need_support') {
        baseScore -= 6;
        riskFactors.push('Chưa có sổ tiết kiệm sẵn.');
        actionRecommendations.push('5S có phương án hướng dẫn hoàn thiện tài chính hợp lệ chuẩn ngân hàng.');
      }

      // Hometown Region
      if (inputs.hometownRegion === 'big_city') {
        baseScore += 6;
        strengths.push('Hộ khẩu Hà Nội / Đà Nẵng / TP.HCM có cơ hội xét cấp thị thực 5 năm nhiều lần.');
      } else if (inputs.hometownRegion === 'caution_province') {
        baseScore -= 8;
        riskFactors.push('Hộ khẩu tại địa phương có tỉ lệ kiểm tra chéo kỹ lưỡng.');
        actionRecommendations.push('Cần bổ sung chứng minh công việc và tài sản để tăng độ tin cậy tối đa.');
      }

      // Prior refusal
      if (inputs.hasPriorRefusal) {
        baseScore -= 12;
        riskFactors.push('Từng có lịch sử bị từ chối cấp thị thực trước đây.');
        actionRecommendations.push('5S sẽ rà soát nguyên nhân cũ và soạn thư giải trình chuyên sâu.');
      }

      const finalScore = Math.max(45, Math.min(99, baseScore));
      let level: EligibilityEvaluationResult['level'] = 'Rất Cao (95%+)';
      let levelColor = '#161984';

      if (finalScore >= 90) {
        level = 'Rất Cao (95%+)';
        levelColor = '#161984';
      } else if (finalScore >= 80) {
        level = 'Tốt (85-94%)';
        levelColor = '#2563EB';
      } else if (finalScore >= 68) {
        level = 'Trung Bình (70-84%)';
        levelColor = '#D97706';
      } else {
        level = 'Cần Cải Thiện (<70%)';
        levelColor = '#ED1B36';
      }

      setResult({
        score: finalScore,
        level,
        levelColor,
        summary:
          finalScore >= 85
            ? 'Hồ sơ của bạn thuộc nhóm rất tiềm năng. Các tiêu chí pháp lý chính đã tương đối đầy đủ. Chỉ cần dịch thuật công chứng và hoàn thiện biểu mẫu chuẩn KVAC là có thể tự tin nộp hồ sơ xin thị thực.'
            : finalScore >= 70
            ? 'Hồ sơ đạt mức khá, tuy nhiên vẫn còn 1-2 điểm cần chuẩn bị kỹ (về dòng tiền hoặc công việc) để tránh bị Lãnh sự yêu cầu bổ sung.'
            : 'Hồ sơ có một số yếu tố cần được tối ưu và giải trình chuyên sâu trước khi nộp để đảm bảo tỉ lệ đậu cao nhất.',
        strengths,
        riskFactors,
        actionRecommendations,
        recommendedDocs,
      });

      setIsEvaluating(false);
    }, 400);
  };

  const handleSendReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone || !contactName) return;
    onDirectConsultation({
      visaType: inputs.visaType,
      score: result?.score || 85,
      phone: contactPhone,
      name: contactName,
    });
    setSubmittedReport(true);
  };

  const resetForm = () => {
    setResult(null);
    setStep(1);
    setSubmittedReport(false);
  };

  return (
    <section id="evaluator" className="py-16 sm:py-20 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean, modern and approachable */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#161984] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#ED1B36]" />
            <span>Công Cụ Đánh Giá Hồ Sơ Trực Tuyến</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#161984] tracking-tight mb-3">
            Kiểm Tra Tỉ Lệ Đậu Thị Thực Hàn Quốc
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Chỉ mất 1 phút trả lời 4 câu hỏi đơn giản để biết ngay độ mạnh của hồ sơ và nhận danh mục tài liệu cần chuẩn bị.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 max-w-3xl mx-auto">
          {!result ? (
            <div>
              {/* Step Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span className="text-[#161984] font-bold">
                    Bước {step} / 4: {
                      step === 1 ? 'Chọn diện thị thực' :
                      step === 2 ? 'Công việc & Thu nhập' :
                      step === 3 ? 'Tài chính & Sổ tiết kiệm' :
                      'Lịch sử du lịch & Hộ khẩu'
                    }
                  </span>
                  <span>{step * 25}% hoàn thành</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#161984] transition-all duration-300 rounded-full"
                    style={{ width: `${step * 25}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: Chọn diện thị thực */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-[#161984] mb-4">
                    1. Bạn dự định xin thị thực Hàn Quốc diện nào?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {[
                      {
                        code: 'C-3-9',
                        title: 'Du Lịch Tự Túc / Thăm Thân',
                        desc: 'Đi tham quan, nghỉ dưỡng, thăm bạn bè, người thân ngắn hạn.',
                        icon: <Plane className="w-5 h-5 text-[#161984]" />,
                      },
                      {
                        code: 'D-2',
                        title: 'Du Học Chính Quy',
                        desc: 'Theo học Cử nhân, Thạc sĩ hoặc học tiếng tại các trường Hàn.',
                        icon: <GraduationCap className="w-5 h-5 text-[#161984]" />,
                      },
                      {
                        code: 'C-3-4',
                        title: 'Thương Mại & Công Tác',
                        desc: 'Khảo sát thị trường, ký kết hợp đồng, tham gia hội nghị.',
                        icon: <Building2 className="w-5 h-5 text-[#161984]" />,
                      },
                    ].map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => setInputs({ ...inputs, visaType: item.code as VisaCategoryCode })}
                        className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[140px] ${
                          inputs.visaType === item.code
                            ? 'border-[#161984] bg-blue-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                            {item.icon}
                          </div>
                          {inputs.visaType === item.code && (
                            <div className="w-5 h-5 rounded-full bg-[#161984] text-white flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-[#161984]">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Công việc & Thu nhập */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-lg font-bold text-[#161984] mb-3">
                      2. Tình trạng công việc hiện tại của bạn?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { val: 'fulltime_insured', label: 'Đi làm có HĐLĐ & đóng BHXH đầy đủ', icon: <Briefcase className="w-4 h-4" /> },
                        { val: 'business_owner', label: 'Chủ Doanh Nghiệp / Hộ Kinh Doanh', icon: <Store className="w-4 h-4" /> },
                        { val: 'freelancer', label: 'Làm tự do / Kinh doanh online', icon: <Laptop className="w-4 h-4" /> },
                        { val: 'student', label: 'Học sinh / Sinh viên đại học', icon: <GraduationCap className="w-4 h-4" /> },
                        { val: 'retired', label: 'Cán bộ hưu trí / Có sổ hưu', icon: <ShieldCheck className="w-4 h-4" /> },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setInputs({ ...inputs, employmentType: item.val as any })}
                          className={`p-3.5 rounded-xl border-2 text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            inputs.employmentType === item.val
                              ? 'border-[#161984] bg-blue-50/50 text-[#161984]'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </span>
                          {inputs.employmentType === item.val && (
                            <div className="w-4 h-4 rounded-full bg-[#161984] text-white flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Mức thu nhập hàng tháng trung bình
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { val: 'under_15m', label: '< 15 triệu' },
                        { val: '15m_30m', label: '15 - 30 triệu' },
                        { val: '30m_50m', label: '30 - 50 triệu' },
                        { val: 'over_50m', label: '> 50 triệu' },
                      ].map((inc) => (
                        <button
                          key={inc.val}
                          type="button"
                          onClick={() => setInputs({ ...inputs, monthlyIncome: inc.val as any })}
                          className={`py-2.5 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                            inputs.monthlyIncome === inc.val
                              ? 'border-[#161984] bg-[#161984] text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {inc.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Tài chính & Tiết kiệm */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-[#161984] mb-3">
                    3. Năng lực tài chính & sổ tiết kiệm của bạn?
                  </h3>

                  <div className="space-y-2.5">
                    {[
                      {
                        val: '100m_200m',
                        title: 'Có sổ tiết kiệm 100 - 200 triệu đồng',
                        desc: 'Gửi tại ngân hàng từ 1 tháng trở lên (đạt chuẩn Lãnh sự).',
                      },
                      {
                        val: '200m_500m',
                        title: 'Có sổ tiết kiệm 200 - 500 triệu đồng',
                        desc: 'Tài chính vững vàng, tỉ lệ đậu được đánh giá rất cao.',
                      },
                      {
                        val: 'over_500m_assets',
                        title: 'Sổ > 500 triệu + Có Nhà Đất hoặc Ô tô',
                        desc: 'Hồ sơ tài chính xuất sắc, có ràng buộc tài sản lớn tại Việt Nam.',
                      },
                      {
                        val: 'under_100m',
                        title: 'Có dưới 100 triệu hoặc mới gửi tiền',
                        desc: 'Cần bổ sung thêm hồ sơ công việc hoặc tài sản hỗ trợ.',
                      },
                      {
                        val: 'need_support',
                        title: 'Chưa có sổ tiết kiệm sẵn',
                        desc: 'Cần 5S tư vấn giải pháp chứng minh tài chính hợp lệ.',
                      },
                    ].map((item) => (
                      <button
                        key={item.val}
                        type="button"
                        onClick={() => setInputs({ ...inputs, savingsAmount: item.val as any })}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
                          inputs.savingsAmount === item.val
                            ? 'border-[#161984] bg-blue-50/50 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-bold text-[#161984]">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                        </div>
                        {inputs.savingsAmount === item.val && (
                          <div className="w-5 h-5 rounded-full bg-[#161984] text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Lịch sử du lịch & Hộ khẩu */}
              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-lg font-bold text-[#161984] mb-3">
                      4. Lịch sử xuất cảnh & Nơi cư trú
                    </h3>
                    <div className="space-y-2 mb-4">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Bạn đã từng đi du lịch những nước nào?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { val: 'none', label: 'Hộ chiếu trắng (chưa từng xuất cảnh)' },
                          { val: 'asean_only', label: 'Đã đi Đông Nam Á (Thái Lan, Sing...)' },
                          { val: 'developed_oecd', label: 'Đã đi Nhật, Hàn, Mỹ, Châu Âu, Úc' },
                          { val: 'korea_visited', label: 'Đã từng nhập cảnh Hàn Quốc' },
                        ].map((item) => (
                          <button
                            key={item.val}
                            type="button"
                            onClick={() => setInputs({ ...inputs, travelHistory: item.val as any })}
                            className={`p-3 rounded-xl border-2 text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                              inputs.travelHistory === item.val
                                ? 'border-[#161984] bg-blue-50/50 text-[#161984]'
                                : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                            }`}
                          >
                            <span>{item.label}</span>
                            {inputs.travelHistory === item.val && (
                              <div className="w-4 h-4 rounded-full bg-[#161984] text-white flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Hộ khẩu thường trú
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[
                          { val: 'big_city', label: 'Hà Nội / Đà Nẵng / TP.HCM' },
                          { val: 'standard_province', label: 'Tỉnh thành thông thường' },
                          { val: 'caution_province', label: 'Khu vực cần lưu ý' },
                        ].map((hk) => (
                          <button
                            key={hk.val}
                            type="button"
                            onClick={() => setInputs({ ...inputs, hometownRegion: hk.val as any })}
                            className={`py-2.5 px-3 rounded-xl border-2 text-xs font-bold transition-all text-center cursor-pointer ${
                              inputs.hometownRegion === hk.val
                                ? 'border-[#161984] bg-[#161984] text-white'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            {hk.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <input
                        type="checkbox"
                        checked={inputs.hasPriorRefusal}
                        onChange={(e) => setInputs({ ...inputs, hasPriorRefusal: e.target.checked })}
                        className="w-4 h-4 text-[#ED1B36] rounded focus:ring-0"
                      />
                      <span>Tôi từng bị từ chối cấp thị thực Hàn Quốc hoặc nước khác trước đây</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Controls between Steps */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#161984] py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Quay Lại
                  </button>
                ) : (
                  <span />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-2 bg-[#161984] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Tiếp Theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={calculateEvaluation}
                    className="inline-flex items-center gap-2 bg-[#ED1B36] hover:bg-[#D6142E] text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isEvaluating ? 'Đang Tính Toán...' : 'Xem Kết Quả Ngay'}</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Result View - Clean, High Contrast, Intuitive */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Header with Score */}
              <div className="bg-gradient-to-br from-[#161984] to-[#1E2B7B] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-blue-200 block mb-1">
                    Đánh giá độ mạnh hồ sơ
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Khả Năng Đạt Thị Thực Của Bạn:
                  </h3>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
                    Xếp loại: {result.level}
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white/10 px-6 py-4 rounded-2xl border border-white/15">
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
                    {result.score}%
                  </span>
                </div>
              </div>

              {/* Summary Text */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                {result.summary}
              </div>

              {/* Strengths & Recommendations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {result.strengths.length > 0 && (
                  <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
                    <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-2 uppercase tracking-wider text-[11px]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Điểm mạnh nổi bật</span>
                    </div>
                    <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                      {result.strengths.map((str, idx) => (
                        <li key={idx} className="leading-snug">{str}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.actionRecommendations.length > 0 && (
                  <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
                    <div className="font-bold text-[#161984] flex items-center gap-1.5 mb-2 uppercase tracking-wider text-[11px]">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Khuyến nghị tối ưu</span>
                    </div>
                    <ul className="space-y-1.5 text-slate-700">
                      {result.actionRecommendations.map((rec, idx) => (
                        <li key={idx} className="leading-snug flex items-start gap-1.5">
                          <span className="text-[#161984] font-bold">→</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Quick Contact Form to get full advice */}
              {!submittedReport ? (
                <form onSubmit={handleSendReport} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70">
                  <h4 className="text-sm font-bold text-[#161984] mb-1">
                    Nhận Danh Mục Hồ Sơ & Tư Vấn Chi Tiết Miễn Phí
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">
                    Chuyên viên 5S sẽ liên hệ hỗ trợ bạn kiểm tra từng mục giấy tờ.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      placeholder="Họ và tên của bạn"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="h-11 flex-1 bg-white border border-slate-300 rounded-xl px-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#161984]"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại / Zalo"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      required
                      className="h-11 flex-1 bg-white border border-slate-300 rounded-xl px-3.5 text-xs text-slate-800 focus:outline-none focus:border-[#161984]"
                    />
                    <button
                      type="submit"
                      className="h-11 bg-[#ED1B36] hover:bg-[#D6142E] text-white text-xs font-bold px-5 rounded-xl shadow-xs transition-colors cursor-pointer shrink-0 flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Nhận Tư Vấn</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                  <p className="text-xs font-bold text-emerald-900">
                    Đã gửi yêu cầu tư vấn thành công!
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    Chuyên viên sẽ liên hệ với bạn theo số {contactPhone} trong thời gian sớm nhất.
                  </p>
                </div>
              )}

              {/* Reset button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#161984] font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Làm lại đánh giá khác
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
