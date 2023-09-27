import Link from "next/link";

interface IAProps {
  href: string;
  children: React.ReactNode;
}

export default function A({ href, children }: IAProps) {
  return (
    <Link href={href} className="hover:text-green-500">
      {children}
    </Link>
  );
}
