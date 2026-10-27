import Image from "next/image";
import Section from "@/components/ui/Section";
import { leadership, sectionIds } from "@/content/site";

export default function Leadership() {
  return (
    <Section
      id={sectionIds.leadership}
      heading={leadership.heading}
      sectionClassName="-scroll-mt-12"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {leadership.items.map((leader) => (
          <li key={leader.name} className="overflow-hidden rounded-2xl border border-line bg-white">
            <div className="relative aspect-4/3 md:aspect-square">
              <Image
                src={leader.image}
                alt={`${leader.name} ${leader.role}`}
                fill
                sizes="(min-width: 1152px) 960px, (min-width: 768px) 85vw, 205vw"
                quality={90}
                className="object-cover object-[65%_center]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {leader.name} <span className="text-brand">{leader.role}</span>
              </h3>
              <p className="mt-2 font-medium">{leader.affiliation}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted">
                {leader.career.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-brand">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
