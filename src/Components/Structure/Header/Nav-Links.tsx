"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeChange from "../ThemeChange";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  const isActive = (href: string) => {
    return pathname === href ? "hidden" : "";
  };
  return (
    <ul className="flex items-center gap-8 font-normal text-white">
      <div className="Links flex items-center">
        {links.map((link) => (
          <li
            title={link.name}
            key={link.name}
            className={`capitalize ${isActive(link.href)}`}
          >
            <Link className="group relative px-4 py-2" href={link.href}>
              {link.name}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 scale-x-0 transform bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </li>
        ))}
      </div>
      <div className="DarkMode flex items-center">
        <ThemeChange />
      </div>
    </ul>
  );
}
