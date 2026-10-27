export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
      {children}
    </span>
  );
}
