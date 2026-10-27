import Link from "next/link";

type Props = Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
};

/**
 * 같은 페이지 안 이동(#), 메일(mailto:), 외부 주소는 브라우저 기본 <a>로,
 * 사이트 안의 다른 페이지는 Next.js Link로 연결한다.
 * Link로 # 링크를 열면 같은 링크를 다시 눌렀을 때 스크롤되지 않는 경우가 있다.
 */
export default function AppLink({ href, ...props }: Props) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props} />;
  }
  return <a href={href} {...props} />;
}
