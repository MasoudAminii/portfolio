import Image from "next/image";
import NavLinks from "./Nav-Links";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="container mx-auto my-4 md:my-8 flex items-center justify-between rounded-full bg-black px-8 py-4 opacity-90">
      <div title="Logo" className="Logo">
        <Link href={"/"}>
          <Image
            src="/logo/logo.webp"
            alt="Logo"
            width={45}
            height={40}
            priority
          />
        </Link>
      </div>
      <NavLinks />
    </nav>
  );
}
