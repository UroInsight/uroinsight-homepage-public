import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact, sectionIds } from "@/content/site";

export default function Contact() {
  return (
    <Section id={sectionIds.contact} tone="surface">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-center md:gap-16">
        <SectionHeading {...contact.heading} />

        <div className="space-y-10">
          {contact.groups.map((group) => (
            <div key={group.title} className="border-t border-ink pt-6 first:border-t-0 first:pt-0">
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <dl className="mt-4 space-y-2 text-lg">
                {group.items.map((item) => (
                  <div key={item.value} className="flex gap-3">
                    {item.label && (
                      <dt className="w-16 shrink-0 font-semibold text-muted">{item.label}</dt>
                    )}
                    <dd className="break-all select-all">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
