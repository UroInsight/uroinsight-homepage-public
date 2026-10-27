import Section from "@/components/ui/Section";
import { about, sectionIds } from "@/content/site";

export default function About() {
  return (
    <Section id={sectionIds.about} heading={about.heading}>
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {about.items.map((item) => (
          <li key={item.title} className="bg-white p-8">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="mt-3 whitespace-pre-line text-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
