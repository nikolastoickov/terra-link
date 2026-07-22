import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary: "bg-gold text-navy hover:brightness-95",
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-cream",
  ghost: "text-cream border-2 border-cream/60 hover:bg-cream/10",
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-semibold text-base transition-colors";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
