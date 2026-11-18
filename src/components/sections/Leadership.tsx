import Image from "next/image";
import Section from "@/components/ui/Section";
import { leadership, sectionIds, uiText } from "@/content/site";
import LeaderCv from "./LeaderCv";

export default function Leadership() {
  return (
    <Section
      id={sectionIds.leadership}
      heading={leadership.heading}
      sectionClassName="-scroll-mt-12"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {leadership.items.map((leader) => (
          <li
            key={leader.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white"
          >
            <div className="relative aspect-4/3 md:aspect-square">
              <Image
                src={leader.image}
                alt={`${leader.name} ${leader.role}`}
                fill
                sizes="(min-width: 1152px) 360px, (min-width: 768px) 31vw, 100vw"
                quality={90}
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
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
              {/* 카드마다 내용 길이가 달라도 버튼은 바닥에 정렬 */}
              <div className="mt-auto pt-6">
                <LeaderCv
                  leader={leader}
                  openLabel={uiText.openCv}
                  closeLabel={uiText.closeModal}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
