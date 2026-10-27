import type { LinkItem } from "@/content/types";
import AppLink from "./AppLink";
import { buttonStyles, type ButtonStyleProps } from "./buttonStyles";

type Props = LinkItem & ButtonStyleProps;

export default function ButtonLink({ label, href, ...styleProps }: Props) {
  return (
    <AppLink href={href} className={buttonStyles(styleProps)}>
      {label}
    </AppLink>
  );
}
