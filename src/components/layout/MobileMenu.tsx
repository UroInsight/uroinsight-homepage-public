"use client";

import AppLink from "@/components/ui/AppLink";
import { useState } from "react";
import type { LinkItem } from "@/content/types";

type Props = {
  items: LinkItem[];
  openLabel: string;
  closeLabel: string;
};

export default function MobileMenu({ items, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="p-2"
        aria-label={open ? closeLabel : openLabel}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="block h-0.5 w-5 bg-ink" />
        <span className="mt-1.5 block h-0.5 w-5 bg-ink" />
        <span className="mt-1.5 block h-0.5 w-5 bg-ink" />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-white px-5 py-4"
          onKeyDown={(e) => e.key === "Escape" && close()}
        >
          {items.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              className="block py-3 font-medium"
              onClick={close}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
      )}
    </div>
  );
}
