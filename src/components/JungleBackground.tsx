export default function JungleBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(232,184,75,0.32),transparent_32%),linear-gradient(180deg,#F4EDE0_0%,#e8dfcb_100%)]" />
      <svg className="absolute -left-12 top-0 h-72 w-[34rem] opacity-30" viewBox="0 0 600 300" fill="none">
        <path d="M0 155C90 58 184 37 280 92C372 145 468 116 600 34V300H0V155Z" fill="#7FB069" />
        <path d="M0 210C100 130 185 114 295 155C402 195 497 166 600 96V300H0V210Z" fill="#4A8B6F" opacity="0.75" />
      </svg>
      <svg className="absolute -right-20 top-6 h-96 w-[42rem] opacity-25" viewBox="0 0 720 360" fill="none">
        <path d="M720 94C614 176 533 198 438 154C331 104 242 124 143 214C91 261 44 287 0 297V360H720V94Z" fill="#2F5D4F" />
        <circle cx="536" cy="102" r="78" fill="#7FB069" opacity="0.7" />
        <circle cx="616" cy="148" r="98" fill="#4A8B6F" opacity="0.55" />
      </svg>
      <svg className="absolute bottom-0 left-0 h-64 w-full opacity-40" viewBox="0 0 1200 260" preserveAspectRatio="none" fill="none">
        <path d="M0 165C103 139 186 127 287 150C410 179 520 215 631 183C768 144 863 78 1007 111C1086 129 1145 169 1200 209V260H0V165Z" fill="#2F5D4F" />
        <path d="M0 207C155 170 296 188 413 215C561 249 662 228 773 181C905 125 1040 148 1200 230V260H0V207Z" fill="#4A8B6F" />
      </svg>
      <svg className="absolute left-0 top-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.78" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div className="absolute -left-10 top-12 h-72 w-20 rounded-full border-l-[18px] border-leaf/30" />
      <div className="absolute right-8 top-0 h-80 w-24 rounded-full border-r-[16px] border-canopy/25" />
    </div>
  );
}
