import Link from "next/link";

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black p-6">
      <div className="container mx-auto flex flex-col items-center justify-between text-white md:flex-row">
        <div className="text-sm">
          © 2025 Your Company. All Rights Reserved.
        </div>
        <ul className="flex">
          {footerLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-4 text-sm font-medium transition-colors duration-300 hover:text-gray-400"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
