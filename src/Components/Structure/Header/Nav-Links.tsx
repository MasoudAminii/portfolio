"use client";
import TransitionLink from "@/Components/Animations/TransitionLink";
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
    if (pathname === href) {
      return "hidden";
    }
    return "text-white/90 hover:text-white";
  };

  return (
    <ul className="relative z-10 flex items-center gap-8 font-normal">
      <div className="Links flex items-center gap-2 md:gap-4">
        {links.map((link) => (
          <li
            title={link.name}
            key={link.name}
            className="capitalize transition-all duration-300"
          >
            <TransitionLink
              className={`group relative px-4 py-2 transition-colors duration-300 ${isActive(link.href)}`}
              href={link.href}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 scale-x-0 transform bg-[var(--accent-color)] transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </TransitionLink>
          </li>
        ))}
      </div>
      <div className="DarkMode ml-2 flex items-center rounded-full bg-white/5 p-2 backdrop-blur-sm">
        <ThemeChange />
      </div>
    </ul>
  );
}
