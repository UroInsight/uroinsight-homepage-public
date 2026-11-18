"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import type { LeaderItem } from "@/content/types";

type Props = {
  leader: Pick<LeaderItem, "name" | "role" | "cv">;
  openLabel: string;
  closeLabel: string;
};

/** 임원 카드의 '약력 보기' 버튼과 약력 모달 */
export default function LeaderCv({ leader, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
      >
        {openLabel} <span aria-hidden>→</span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeLabel={closeLabel}
        title={
          <>
            {leader.name} <span className="text-brand">{leader.role}</span>
          </>
        }
      >
        <div className="space-y-8">
          {leader.cv.map((section) => (
            <section key={section.title}>
              <h3 className="text-sm font-bold tracking-wide text-brand">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-brand">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Modal>
    </>
  );
}
