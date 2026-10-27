import AppLink from "@/components/ui/AppLink";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { company, contactLink, navItems, sectionIds, uiText } from "@/content/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <AppLink href={`#${sectionIds.hero}`} className="text-lg font-bold tracking-tight">
          {company.nameEn}
        </AppLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <AppLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </AppLink>
          ))}
          <ButtonLink {...contactLink} size="sm" />
        </nav>

        <MobileMenu
          items={[...navItems, contactLink]}
          openLabel={uiText.openMenu}
          closeLabel={uiText.closeMenu}
        />
      </Container>
    </header>
  );
}
