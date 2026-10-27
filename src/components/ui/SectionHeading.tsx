import type { SectionHeadingContent } from "@/content/types";

export default function SectionHeading({ label, title, description }: SectionHeadingContent) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-brand uppercase">{label}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl whitespace-pre-line text-muted">{description}</p>
      )}
    </div>
  );
}
