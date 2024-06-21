"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    href: "/posts",
    name: "Posts",
  },
  {
    id: 2,
    href: "/about",
    name: "About",
  },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {navLinks?.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
            <></>
        //   <Link
        //     className={isActive ? "text-yellow-400" : "text-white"}
        //     href={link.href}
        //     key={link.id}
        //   >
        //     {" "}
        //     {link.name}
        //   </Link>
        );
      })}
    </div>
  );
};

export default Header;
