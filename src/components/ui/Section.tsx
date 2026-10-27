import type { SectionId } from "@/content/site";
import type { SectionHeadingContent } from "@/content/types";
import { cn } from "@/lib/cn";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const tones = {
  default: "bg-white",
  surface: "bg-surface",
  brand: "bg-brand-dark text-white",
};

type Props = {
  id?: SectionId;
  tone?: keyof typeof tones;
  heading?: SectionHeadingContent;
  /** 안쪽 Container에 붙는다. */
  className?: string;
  /** 바깥 <section>에 붙는다. */
  sectionClassName?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  tone = "default",
  heading,
  className,
  sectionClassName,
  children,
}: Props) {
  return (
    <section id={id} className={cn("py-24", tones[tone], sectionClassName)}>
      <Container className={className}>
        {heading && <SectionHeading {...heading} />}
        <div className={cn(heading && "mt-12")}>{children}</div>
      </Container>
    </section>
  );
}
