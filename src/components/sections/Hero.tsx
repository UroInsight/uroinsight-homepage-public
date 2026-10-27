import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { hero, sectionIds } from "@/content/site";

export default function Hero() {
  return (
    <section id={sectionIds.hero} className="relative isolate overflow-hidden bg-night text-white">
      {/* 첫 화면에 바로 보이는 이미지라 지연 로딩하지 않고 먼저 불러온다.
          화면이 16:9보다 세로로 길면(모바일) 이미지가 높이에 맞춰 화면보다 넓게 커지므로,
          그 너비(화면 높이 × 16/9)를 sizes로 알려줘야 흐려지지 않는다. */}
      <Image
        src={hero.backgroundImage}
        alt=""
        fill
        sizes="(max-aspect-ratio: 16/9) 178vh, 100vw"
        loading="eager"
        fetchPriority="high"
        className="-z-20 object-cover object-[70%_25%]"
      />
      <div className="absolute inset-0 -z-10 bg-night/30 md:bg-transparent md:bg-linear-to-r md:from-night md:via-night/60 md:to-transparent" />

      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <div className="rounded-2xl bg-black/50 p-6 backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
          <p className="font-semibold text-brand-light">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight whitespace-pre-line md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg whitespace-pre-line text-white/80">
            {hero.description}
          </p>
          <ButtonLink {...hero.cta} variant="inverse" className="mt-10" />
        </div>
      </Container>
    </section>
  );
}
