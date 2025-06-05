"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./navbar.css";
import Image from "next/image";

const navLinks = [
  { id: "musee", name: "Le musée", href: "#musee" },
  { id: "concept", name: "Le concept", href: "#concept" },
  { id: "artiste", name: "Les artistes", href: "#artiste" },
  { id: "about", name: "Notre équipe", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({ onClick }) => (
    <>
      {navLinks.map((link) => (
        <nav key={link.name}>
          <li className="z-[999] text-[1rem]">
            <div className="group sm:hover:bg-transparent hover:bg-[#323741] text-[#1e2127] transition-colors rounded">
              <Link
                href={link.href}
                onClick={onClick}
                className="block w-full sm:px-0 sm:py-0 px-2 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus:p-[4px]"
              >
                <span className="underline-animation transition-all">
                  {link.name}
                </span>
              </Link>
            </div>
          </li>
        </nav>
      ))}
    </>
  );

  return (
    <nav
      className="text-[18px] fixed z-[999] w-full text-lg text-[#1e2127] transition-all duration-300 ease-in-out"
      style={{
        background: "rgba(255, 253, 239, 0.8)",
        backdropFilter: "blur(50px)",
      }}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="flex items-center justify-between px-[150px] 900:px-[200px] py-[20px]">
        <Link href="/" className="flex items-center gap-[10px]">
          <Image src={`/img/logo.svg`} width={50} height={50} alt={"accueil"} />
          <span className="font-bold font-[AmaticBold] text-[1.5rem]">
            l’atelier chromatique
          </span>
        </Link>

        <ul className="hidden sm:flex items-center gap-[20px] text-[var(--links)]">
          <NavItems />
        </ul>

        <div className="flex items-center sm:hidden cursor-pointer">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-2 bg-[#1e2127] backdrop-blur-md">
            <NavItems onClick={() => setIsOpen(false)} />
          </ul>
        </div>
      )}
      <div
        className="mx-auto mt-0"
        style={{
          width: "90%",
          borderBottom: "1px solid #8D868E",
        }}
      />
    </nav>
  );
};

export default Navbar;
