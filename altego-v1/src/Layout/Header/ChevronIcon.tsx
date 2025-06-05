import "./ChevronIcon.css";

export default function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`chevron-icon ${open ? "open" : ""}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {/* Fester Chevron */}
      <polyline
        className="chevron-main"
        points="15,6 9,12 15,18"
        fill="none"
        stroke="orange"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Zweiter identischer Chevron (animierter) */}
      <polyline
        className="chevron-fade"
        points="15,6 9,12 15,18"
        fill="none"
        stroke="orange"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
