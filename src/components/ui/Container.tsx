import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ className, children }: Props) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5", className)}>{children}</div>;
}
