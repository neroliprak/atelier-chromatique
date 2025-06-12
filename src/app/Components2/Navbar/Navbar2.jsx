"use client";

import { usePathname } from "next/navigation";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import "./navbar.css";

const navLinks = [
  { id: "musee", name: "Le musée", href: "#musee" },
  { id: "concept", name: "Le concept", href: "#concept" },
  { id: "artiste", name: "Les artistes", href: "#artiste" },
  { id: "about", name: "Notre équipe", href: "#equipe" },
];

const Navbar2 = () => {
  const pathname = usePathname();
  const isStaticPage = ["/Artiste", "/Equipes"].includes(pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isStaticPage) return;

    const handleScroll = () => {
      setScrolled(
        window.scrollY > window.innerHeight - window.innerHeight * 0.1
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStaticPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const NavItems = ({ onClick }) => {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
      <>
        {navLinks.map((link) => {
          const href = isHome ? link.href : `/${link.href}`;
          return (
            <li
              key={link.id}
              className="z-[999] text-base transition-colors duration-300"
            >
              <div className="group sm:hover:bg-transparent hover:bg-[#323741] transition-colors rounded">
                <Link
                  href={href}
                  onClick={onClick}
                  className="block w-full sm:px-0 sm:py-0 px-2 py-3 focus:outline-none focus:p-[4px]"
                >
                  <span className="underline-animation transition-all">
                    {link.name}
                  </span>
                </Link>
              </div>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute  bg-white text-[#20252C] z-[1000]"
      >
        Aller au contenu principal
      </a>

      <header
        role="banner"
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isStaticPage || scrolled
            ? "bg-[#20252C] text-[#FFFAF4]"
            : "bg-transparent text-white"
        }`}
      >
        <nav
          className={`text-base transition-all duration-300 ease-in-out ${
            isStaticPage || scrolled ? "text-[#FFFAF4]" : "text-white"
          }`}
          aria-label="Navigation principale"
        >
          <div className="flex items-center justify-between  py-[20px] custom-padding-lr">
            <Link
              href="/"
              className="flex items-center gap-[10px]"
              aria-label="Page d’accueil"
            >
              <Image
                src="/img/logo.svg"
                width={50}
                height={50}
                alt="Logo de l'atelier chromatique"
              />
              <span className="font-bold font-[AmaticBold] logo-svg">
                l’atelier chromatique
              </span>
            </Link>

            <ul
              className="hidden sm:flex items-center gap-[20px] text-[var(--links)]"
              role="menubar"
            >
              <NavItems />
            </ul>
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                aria-controls="menu-mobile"
                className="focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div
              id="menu-mobile"
              className="sm:hidden border-t border-white/10"
            >
              <ul
                className="flex flex-col px-6 py-4 gap-2 bg-[#1e2127] backdrop-blur-md"
                role="menu"
              >
                <NavItems onClick={() => setIsOpen(false)} />
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar2;
