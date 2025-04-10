import Image from "next/image";
import NavLinks from "./Nav-Links";
import TransitionLink from "@/Components/Animations/TransitionLink";

export default function Header() {
  return (
    <nav className="container mx-auto my-4 flex items-center justify-between rounded-full bg-black/80 px-8 py-4 backdrop-blur-md md:my-8 md:px-10">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-[var(--accent-color)] opacity-5 blur-xl"></div>
      {/* Border accent */}
      <div className="absolute inset-0 rounded-full border border-white/10"></div>

      <div title="Logo" className="Logo relative z-10">
        <TransitionLink href={"/"}>
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo.webp"
              alt="Logo"
              width={45}
              height={40}
              priority
              className="transition-transform duration-300 hover:scale-110"
            />
            <span className="hidden text-lg font-bold text-white md:block">
              Devo<span className="text-[var(--accent-color)]">web</span>
            </span>
          </div>
        </TransitionLink>
      </div>
      <NavLinks />
    </nav>
  );
}
