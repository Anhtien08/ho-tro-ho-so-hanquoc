import React from 'react';

interface VisaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  showSubtitle?: boolean;
  className?: string;
}

export const VisaLogo: React.FC<VisaLogoProps> = ({
  size = 'md',
  theme = 'light',
  showSubtitle = true,
  className = '',
}) => {
  // Height sizing tailored for header bar and footer bar
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Clean container without clipping or aggressive scale */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          theme === 'dark' ? 'bg-white p-1 rounded-lg shadow-sm' : ''
        }`}
      >
        <img
          src="/assets/aistudio/visa5s_logo_clean.png"
          onError={(e) => {
            // Graceful fallback to original attachment if needed
            (e.target as HTMLImageElement).src = '/assets/aistudio/image_bc46225d.png';
          }}
          alt="5S - Hãy Đến Nơi Nào Bạn Muốn"
          className={`${heightClasses[size]} w-auto object-contain pointer-events-none select-none max-w-[140px] sm:max-w-[160px]`}
          loading="eager"
        />
      </div>

      {showSubtitle && (
        <div className="hidden xl:flex flex-col justify-center leading-tight">
          <span
            className={`text-[12px] font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#161984]'
            }`}
          >
            TƯ VẤN 5S
          </span>
          <span
            className={`text-[10px] font-medium tracking-wide ${
              theme === 'dark' ? 'text-blue-200' : 'text-slate-500'
            }`}
          >
            &ldquo;Hãy Đến Nơi Nào Bạn Muốn&rdquo;
          </span>
        </div>
      )}
    </div>
  );
};
