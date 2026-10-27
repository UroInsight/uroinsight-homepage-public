import Container from "@/components/ui/Container";
import { company, footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <Container className="py-14">
        <p className="text-lg font-bold text-white">{company.nameEn}</p>
        <ul className="mt-5 space-y-1 text-sm">
          {footer.companyInfo.map((row) => (
            <li key={row[0].label} className="flex flex-wrap gap-x-6 gap-y-1">
              {row.map((info) => (
                <span key={info.label} className="flex gap-2">
                  <span>{info.label}</span>
                  <span>{info.value}</span>
                </span>
              ))}
            </li>
          ))}
        </ul>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
