import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="h-fit bg-[#C9B49D] text-[#1e2127] text-center py-[30px]">
        <p>© 2025 APF France Handicap - Tous droits réservés</p>
        <Link href="/Sitemap" className="hover:underline">
          Plan du site
        </Link>
      </footer>
    </>
  );
};

export default Footer;
