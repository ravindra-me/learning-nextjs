"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./style.css";
const navLinks = [
  {
    name: "SignUp",
    href: "/signup",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forget-password",
  },
];

function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((e) => {
        const activeLink = pathname === e.href || pathname.includes(e.href);
        return (
          <Link
            className={activeLink ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={e.href}
            key={e.href}
          >
            {e.name}
          </Link>
        );
      })}
      <div>Auth Layout</div>
      {children}
    </div>
  );
}

export default AuthLayout;
