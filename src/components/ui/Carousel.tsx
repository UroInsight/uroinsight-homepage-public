"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Slide = {
  label: string;
  content: React.ReactNode;
};

type Props = {
  slides: Slide[];
  prevLabel: string;
  nextLabel: string;
};

const SWIPE_THRESHOLD = 50;

const arrowButton =
  "flex size-11 items-center justify-center rounded-full border border-line bg-white transition-colors enabled:hover:border-ink disabled:opacity-40";

export default function Carousel({ slides, prevLabel, nextLabel }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const lastIndex = slides.length - 1;
  const goTo = (i: number) => setIndex(Math.min(Math.max(i, 0), lastIndex));

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) goTo(dx < 0 ? index + 1 : index - 1);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              aria-label={slide.label}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-brand" : "w-2 bg-line hover:bg-muted",
              )}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className={arrowButton}
          >
            <Chevron className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => goTo(index + 1)}
            disabled={index === lastIndex}
            className={arrowButton}
          >
            <Chevron />
          </button>
        </div>
      </div>

      <div
        className="mt-6 overflow-hidden"
        onTouchStart={(e) => {
          // 영상 재생바를 끌어 옮기는 동작이 슬라이드 넘기기로 처리되지 않게 영상 위 터치는 무시한다.
          const onVideo = (e.target as Element).closest("video");
          touchStartX.current = onVideo ? null : e.touches[0].clientX;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <ul
          className="flex items-start transition-transform duration-500 motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            // 슬라이드마다 높이가 달라서, 화면 밖 슬라이드는 높이를 0으로 접어
            // 전체 높이가 지금 보이는 슬라이드를 따라가게 한다.
            // inert는 화면 밖 슬라이드를 Tab 포커스와 화면 읽기에서 뺀다.
            <li
              key={slide.label}
              className={cn("w-full shrink-0", i !== index && "h-0 overflow-hidden")}
              inert={i !== index}
            >
              {slide.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("size-5", className)}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
