import Section from "@/components/ui/Section";
import { sectionIds, technology } from "@/content/site";

export default function Technology() {
  return (
    <Section id={sectionIds.technology} heading={technology.heading}>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {technology.items.map((item, i) => (
          <li key={item.title} className="border-t-2 border-ink pt-6">
            <span className="font-mono text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
            <p className="mt-2 whitespace-pre-line text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
