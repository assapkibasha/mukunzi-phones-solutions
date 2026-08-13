// Placeholder product illustrations (line-art in the brand navy).
// These are swapped for real product photos later — each product in
// lib/products.js points at one via its `art` key.

const STROKE = "var(--blue)";
const ACCENT = "var(--blue-soft)";

const arts = {
  phone: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <circle cx="60" cy="17" r="2" fill={ACCENT} stroke="none" />
    </>
  ),
  phoneAccent: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <rect x="48" y="14" width="10" height="16" rx="4" fill={ACCENT} stroke="none" />
    </>
  ),
  phoneRing: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <circle cx="60" cy="40" r="10" stroke={ACCENT} />
    </>
  ),
  phonePlain: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
    </>
  ),
  phoneSquare: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <rect x="63" y="14" width="9" height="9" rx="3" fill={ACCENT} stroke="none" />
    </>
  ),
  phoneLines: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <line x1="48" y1="30" x2="72" y2="30" stroke={ACCENT} />
      <line x1="48" y1="40" x2="72" y2="40" stroke={ACCENT} />
    </>
  ),
  phoneDots: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <circle cx="53" cy="18" r="2" fill={ACCENT} stroke="none" />
      <circle cx="60" cy="18" r="2" fill={ACCENT} stroke="none" />
      <circle cx="67" cy="18" r="2" fill={ACCENT} stroke="none" />
    </>
  ),
  phoneCam: (
    <>
      <rect x="42" y="8" width="36" height="74" rx="7" />
      <line x1="54" y1="72" x2="66" y2="72" />
      <rect x="49" y="15" width="22" height="12" rx="3" stroke={ACCENT} />
    </>
  ),
  tablet: (
    <>
      <rect x="30" y="10" width="60" height="70" rx="5" />
      <line x1="52" y1="73" x2="68" y2="73" />
      <circle cx="60" cy="16" r="1.8" fill={ACCENT} stroke="none" />
    </>
  ),
  laptop: (
    <>
      <rect x="22" y="14" width="76" height="48" rx="3" />
      <path d="M12 72h96" />
      <circle cx="60" cy="38" r="7" fill={ACCENT} stroke="none" />
    </>
  ),
  tv: (
    <>
      <rect x="18" y="12" width="84" height="52" rx="3" />
      <line x1="45" y1="78" x2="75" y2="78" />
      <line x1="60" y1="64" x2="60" y2="78" />
      <circle cx="60" cy="38" r="9" fill={ACCENT} stroke="none" />
    </>
  ),
  tvPlay: (
    <>
      <rect x="14" y="10" width="92" height="56" rx="3" />
      <line x1="42" y1="80" x2="78" y2="80" />
      <line x1="60" y1="66" x2="60" y2="80" />
      <path d="M50 30l16 8-16 8v-16" fill={ACCENT} stroke="none" />
    </>
  ),
  speaker: (
    <>
      <rect x="25" y="28" width="70" height="34" rx="17" />
      <circle cx="45" cy="45" r="8" />
      <circle cx="75" cy="45" r="8" fill={ACCENT} stroke={STROKE} />
    </>
  ),
  powerbank: (
    <>
      <rect x="30" y="22" width="60" height="46" rx="10" />
      <polygon points="63 30 52 47 60 47 57 60 68 43 60 43 63 30" fill={ACCENT} stroke="none" />
    </>
  ),
  earbuds: (
    <>
      <rect x="38" y="30" width="44" height="30" rx="8" />
      <path d="M46 30v-6a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v6" />
      <circle cx="52" cy="45" r="3" fill={ACCENT} stroke="none" />
      <circle cx="68" cy="45" r="3" fill={ACCENT} stroke="none" />
    </>
  ),
  router: (
    <>
      <rect x="25" y="48" width="70" height="22" rx="5" />
      <line x1="40" y1="48" x2="40" y2="30" />
      <line x1="80" y1="48" x2="80" y2="22" />
      <circle cx="36" cy="59" r="2.5" fill={ACCENT} stroke="none" />
      <circle cx="46" cy="59" r="2.5" fill={ACCENT} stroke="none" />
    </>
  ),
  watch: (
    <>
      <circle cx="60" cy="45" r="22" />
      <path d="M52 16l2-8h12l2 8M52 74l2 8h12l2-8" />
      <polyline points="60 34 60 45 68 50" stroke={ACCENT} />
    </>
  ),
  gamepad: (
    <>
      <path d="M35 32h50a16 16 0 0 1 15.7 19.2l-2.3 11a9 9 0 0 1-15.5 4.3L75 58H45l-7.9 8.5a9 9 0 0 1-15.5-4.3l-2.3-11A16 16 0 0 1 35 32Z" />
      <line x1="45" y1="41" x2="45" y2="50" />
      <line x1="40.5" y1="45.5" x2="49.5" y2="45.5" />
      <circle cx="73" cy="42" r="2.5" fill={ACCENT} stroke="none" />
      <circle cx="80" cy="49" r="2.5" fill={ACCENT} stroke="none" />
    </>
  ),
};

export default function ProductArt({ kind, strokeWidth = 3.5 }) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke={STROKE}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {arts[kind] || arts.phonePlain}
    </svg>
  );
}
