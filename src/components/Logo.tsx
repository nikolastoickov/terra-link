type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-navy" : "text-cream";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="30"
        height="18"
        viewBox="0 0 30 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="4.5"
          width="16"
          height="9"
          rx="4.5"
          stroke={variant === "dark" ? "var(--color-navy)" : "var(--color-cream)"}
          strokeWidth="2.4"
        />
        <rect
          x="12.5"
          y="4.5"
          width="16"
          height="9"
          rx="4.5"
          stroke="var(--color-gold)"
          strokeWidth="2.4"
        />
      </svg>
      <span className={`font-serif font-semibold text-xl tracking-tight ${textColor}`}>
        Terra Link
      </span>
    </span>
  );
}
