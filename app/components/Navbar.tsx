"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Cardiomed"
            width={210}
            height={52}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <ul className="flex items-center gap-10">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active
                      ? "text-green-cardiomed nav-link--active"
                      : "text-gray-700 hover:text-green-cardiomed"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
