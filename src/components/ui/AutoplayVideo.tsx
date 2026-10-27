"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  label: string;
  className?: string;
};

export default function AutoplayVideo({ src, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // 방문자가 재생바로 직접 멈췄다면, 다시 화면에 들어와도 자동 재생하지 않는다.
    let pausedByUser = false;
    let pausingByObserver = false;
    const handlePause = () => {
      if (!pausingByObserver) pausedByUser = true;
      pausingByObserver = false;
    };
    const handlePlay = () => {
      pausedByUser = false;
    };
    video.addEventListener("pause", handlePause);
    video.addEventListener("play", handlePlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedByUser) video.play().catch(() => {});
        } else if (!video.paused) {
          pausingByObserver = true;
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      controls
      preload="none"
      className={className}
    />
  );
}
