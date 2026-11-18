"use client";

import { useEffect, useId, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  /** ESC, 배경 클릭, 닫기 버튼 등 어떤 방법으로 닫혀도 호출된다. */
  onClose: () => void;
  title: React.ReactNode;
  /** 닫기 버튼의 스크린리더용 이름 */
  closeLabel: string;
  /** 안쪽 패널 너비 등을 바꿀 때 사용 (기본 max-w-2xl) */
  className?: string;
  children: React.ReactNode;
};

/**
 * 네이티브 <dialog> 기반 모달.
 * 포커스 가두기, ESC 닫기, 배경 비활성화는 브라우저가 처리한다.
 * 열림 상태는 부모가 open/onClose로 관리한다.
 */
export default function Modal({ open, onClose, title, closeLabel, className, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // 모든 닫기 경로를 dialog.close()로 모아, onClose는 dialog의 close 이벤트에서만 부른다.
  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      // 패널 바깥(::backdrop 영역)을 클릭하면 이벤트 대상이 dialog 자신이 된다.
      onClick={(e) => e.target === e.currentTarget && close()}
      className={cn(
        "m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-2xl flex-col overflow-hidden rounded-2xl bg-white text-ink shadow-xl backdrop:bg-night/60 open:flex",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
        <h2 id={titleId} className="text-xl font-bold">
          {title}
        </h2>
        <button
          type="button"
          onClick={close}
          aria-label={closeLabel}
          className="-m-2 rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-ink"
        >
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="overflow-y-auto px-6 py-6">{children}</div>
    </dialog>
  );
}
