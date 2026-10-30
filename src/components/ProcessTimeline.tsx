import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Award, Clock } from 'lucide-react';
// Import hình ảnh đúng chuẩn Vite/React
import dossierImg from '../assets/images/dossier_consultation_1792985144950.jpg';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tiếp Nhận & Thẩm Định Sơ Bộ Trong 30 Phút',
      desc: 'Chuyên viên rà soát chi tiết giấy tờ nhân thân, tính pháp lý của hợp đồng lao động, sao kê tài khoản ngân hàng và lịch sử xuất cảnh.',
    },
    {
      num: '02',
      title: 'Xây Dựng Phương Án Tối Ưu Điểm Yếu',
      desc: 'Với các trường hợp kinh doanh tự do, hộ khẩu vùng lưu ý hoặc từng trượt hồ sơ, luật sư 5S soạn thảo thư giải trình chuẩn pháp lý gửi Lãnh sự.',
    },
    {
      num: '03',
      title: 'Dịch Thuật Công Chứng & Điền Đơn E-Form Chuẩn',
      desc: 'Dịch thuật tư pháp sang tiếng Hàn/Anh, xử lý ảnh hộ chiếu chuẩn ICAO và hoàn thiện tờ khai xin cấp thị thực theo đúng biểu mẫu mới nhất của KVAC.',
    },
    {
      num: '04',
      title: 'Đặt Lịch Hẹn & Đồng Hành Nộp Tại KVAC',
      desc: 'Đặt lịch hẹn online tránh xếp hàng chờ đợi, chuyên viên trực tiếp có mặt tại trung tâm KVAC hướng dẫn lấy sinh trắc học và nộp hồ sơ.',
    },
    {
      num: '05',
      title: 'Theo Dõi Xét Duyệt & Bàn Giao Thị Thực Tận Tay',
      desc: 'Cập nhật tiến độ hàng ngày qua SMS/Zalo, tiếp nhận kết quả từ Lãnh sự quán và chuyển phát hỏa tốc hộ chiếu có kèm thị thực đến tận nhà khách hàng.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Photographic Proof Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src={dossierImg}
                alt="Thẩm định hồ sơ thị thực Hàn Quốc tại 5S"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161984]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1.5">
                  Tiêu Chuẩn Soát Xét 2 Vòng
                </span>
                <p className="text-sm font-medium text-slate-100 leading-relaxed">
                  Mọi bộ hồ sơ đều được Trưởng ban Thẩm định & Chuyên viên phụ trách rà soát kỹ lưỡng trước khi nộp.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Human Editorial Numbered Process List */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#161984] uppercase tracking-wider mb-3">
              <span>QUY TRÌNH LÀM VIỆC MINH BẠCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
              5 Bước Chuẩn Hóa Theo Tiêu Chuẩn Tiếp Nhận
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 font-normal leading-relaxed">
              Quy trình khép kín giúp tiết kiệm tối đa thời gian, kiểm soát các rủi ro giấy tờ thường dẫn đến việc bị kéo dài thời gian xét duyệt hoặc từ chối cấp thị thực.
            </p>

            <div className="space-y-3.5">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/80 hover:border-[#161984]/40 hover:bg-slate-50 transition-all group bg-white shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#161984] font-black font-mono text-sm flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-[#161984] group-hover:text-white transition-colors">
                    {st.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
