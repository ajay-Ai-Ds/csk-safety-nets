import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  light = false,
  stacked = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="CSK Safety Nets & Invisible Grills Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoIconCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C0272D" />
                <stop offset="100%" stopColor="#A61E22" />
              </linearGradient>
              <linearGradient id="logoIconGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8C84A" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="28" fill="url(#logoIconCrimson)" />
            <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="url(#logoIconGold)" strokeWidth="3" opacity="0.85" />
            <path
              d="M 67 34 A 26 26 0 1 0 67 66"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <circle cx="67" cy="50" r="4.5" fill="url(#logoIconGold)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 select-none group ${className}`}
      aria-label="CSK Safety Nets & Invisible Grills Home"
    >
      {/* Monogram Badge */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoBadgeCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C0272D" />
              <stop offset="100%" stopColor="#A61E22" />
            </linearGradient>
            <linearGradient id="logoBadgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8C84A" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="28" fill="url(#logoBadgeCrimson)" />
          <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="url(#logoBadgeGold)" strokeWidth="3" opacity="0.85" />
          <path
            d="M 67 34 A 26 26 0 1 0 67 66"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle cx="67" cy="50" r="4.5" fill="url(#logoBadgeGold)" />
        </svg>
      </div>

      {/* Clean Text Typography */}
      <div className={`flex flex-col ${stacked ? "text-center" : "text-left"}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-[#A61E22]"}`}>
            CSK
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#D4AF37]">
            SAFETY
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${light ? "text-slate-300" : "text-[#4A4A4A]"}`}>
          Nets & Grills · Bangalore
        </span>
      </div>
    </Link>
  );
}
