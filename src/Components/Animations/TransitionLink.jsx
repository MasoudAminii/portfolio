"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const pathname = usePathname();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleLinkClick = async (e) => {
    e.preventDefault();

    // If the user clicks on the current page link, do nothing
    if (pathname === href) {
      return;
    }

    document.body.classList.add("page-transition-out");

    // Wait for the fade-out effect to finish (sync with CSS duration)
    await sleep(200);

    router.push(href);

    // Optional: slight delay to remove transition class after routing
    await sleep(100);
    document.body.classList.remove("page-transition-out");
  };

  return (
    <Link onClick={handleLinkClick} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
