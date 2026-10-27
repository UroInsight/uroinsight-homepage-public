import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  inverse: "bg-white text-brand-dark hover:bg-brand-soft",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-7 py-3.5",
};

export type ButtonStyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleProps = {}) {
  return cn(
    "inline-block rounded-full font-semibold transition-colors",
    variants[variant],
    sizes[size],
    className,
  );
}
