// Small stroke icons used across the site. All inherit `stroke` from CSS
// unless a color is passed, so they recolor with the theme.

function Svg({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconSearch(props) {
  return (
    <Svg strokeWidth="2.5" stroke="currentColor" {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </Svg>
  );
}

export function IconMenu(props) {
  return (
    <Svg strokeWidth="2.2" stroke="currentColor" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </Svg>
  );
}

export function IconArrow(props) {
  return (
    <Svg strokeWidth="2.5" stroke="currentColor" {...props}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </Svg>
  );
}

export function IconUser(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </Svg>
  );
}

export function IconCart(props) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="20" r="1.6" />
      <circle cx="18" cy="20" r="1.6" />
      <path d="M2 3h3l2.7 12.3a1.5 1.5 0 0 0 1.5 1.2h8.9a1.5 1.5 0 0 0 1.5-1.2L21.5 8H6" />
    </Svg>
  );
}

export function IconShield(props) {
  return (
    <Svg {...props}>
      <path d="M12 2 4 5.5v5.7c0 5 3.4 8.6 8 10.3 4.6-1.7 8-5.3 8-10.3V5.5L12 2Z" />
      <polyline points="8.5 12 11 14.5 15.5 9.5" />
    </Svg>
  );
}

export function IconTruck(props) {
  return (
    <Svg {...props}>
      <rect x="1.5" y="6" width="13" height="10" rx="1" />
      <path d="M14.5 9h4l3 3.5V16h-7" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </Svg>
  );
}

export function IconCard(props) {
  return (
    <Svg {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </Svg>
  );
}

export function IconReturn(props) {
  return (
    <Svg {...props}>
      <path d="M3 12a9 9 0 1 0 2.6-6.3" />
      <polyline points="3 2.5 3 7 7.5 7" />
    </Svg>
  );
}

export function IconPin(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 1 8 8c0 5.3-8 12-8 12S4 15.3 4 10a8 8 0 0 1 8-8Z" />
    </Svg>
  );
}

/* Category icons */

export function IconPhone(props) {
  return (
    <Svg {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
    </Svg>
  );
}

export function IconLaptop(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
    </Svg>
  );
}

export function IconTv(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <line x1="9" y1="21" x2="15" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </Svg>
  );
}

export function IconFridge(props) {
  return (
    <Svg {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="1.5" />
      <line x1="6" y1="9" x2="18" y2="9" />
      <line x1="9" y1="5.5" x2="9" y2="6.5" />
      <line x1="9" y1="12" x2="9" y2="14" />
    </Svg>
  );
}

export function IconGamepad(props) {
  return (
    <Svg {...props}>
      <path d="M6.5 8h11a4.5 4.5 0 0 1 4.4 5.4l-.8 4a2.5 2.5 0 0 1-4.3 1.2L14.6 16H9.4l-2.2 2.6a2.5 2.5 0 0 1-4.3-1.2l-.8-4A4.5 4.5 0 0 1 6.5 8Z" />
      <line x1="8" y1="11" x2="8" y2="13.5" />
      <line x1="6.8" y1="12.2" x2="9.2" y2="12.2" />
      <circle cx="16.2" cy="11.4" r="0.4" fill="currentColor" />
      <circle cx="18" cy="13.2" r="0.4" fill="currentColor" />
    </Svg>
  );
}

export function IconZap(props) {
  return (
    <Svg {...props}>
      <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
    </Svg>
  );
}

export function IconHeadphones(props) {
  return (
    <Svg {...props}>
      <path d="M4 12a8 8 0 0 1 16 0" />
      <rect x="2.5" y="12" width="5" height="8" rx="1.5" />
      <rect x="16.5" y="12" width="5" height="8" rx="1.5" />
    </Svg>
  );
}

export function IconWatch(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="6" />
      <path d="M9 4.5 9.8 2h4.4L15 4.5M9 19.5 9.8 22h4.4l.8-2.5" />
    </Svg>
  );
}

export function IconRouter(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="13" width="18" height="6" rx="1.5" />
      <line x1="7" y1="13" x2="7" y2="9" />
      <line x1="17" y1="13" x2="17" y2="6" />
      <circle cx="6.5" cy="16" r="0.5" fill="currentColor" />
    </Svg>
  );
}

export function IconCamera(props) {
  return (
    <Svg {...props}>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M8 7l1.5-3h5L16 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </Svg>
  );
}
