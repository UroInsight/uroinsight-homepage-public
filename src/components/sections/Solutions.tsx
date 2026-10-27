import AutoplayVideo from "@/components/ui/AutoplayVideo";
import Carousel from "@/components/ui/Carousel";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { sectionIds, solutions, uiText } from "@/content/site";

export default function Solutions() {
  return (
    <Section id={sectionIds.solutions} tone="surface" heading={solutions.heading}>
      <Carousel
        slides={[
          {
            label: solutions.video.label,
            content: (
              <AutoplayVideo
                src={solutions.video.src}
                label={solutions.video.label}
                className="aspect-video w-full rounded-2xl border border-line bg-black"
              />
            ),
          },
          { label: solutions.modulesLabel, content: <ModuleCards /> },
        ]}
        prevLabel={uiText.prevSlide}
        nextLabel={uiText.nextSlide}
      />
    </Section>
  );
}

function ModuleCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {solutions.items.map((item) => (
        <article
          key={item.id}
          className="flex flex-col rounded-2xl border border-line bg-white p-8"
        >
          <p className="font-mono text-sm font-semibold text-brand">{item.code}</p>
          <h3 className="mt-1 text-2xl font-bold">{item.name}</h3>
          <p className="mt-3 whitespace-pre-line text-muted">{item.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-5">
            {item.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
