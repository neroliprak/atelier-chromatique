import Link from "next/link";

const Sitemap = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-[3rem] mb-8">Plan du site</h1>
      <nav aria-label="Plan du site">
        <ul>
          <li>
            <Link className="hover:underline" href="/">
              Accueil
            </Link>
            <ul>
              {" "}
              <li className="pl-[20px]">
                <Link className="hover:underline" href="/#about">
                  À propos du musée
                </Link>
              </li>
              <li className="pl-[20px]">
                <Link className="hover:underline" href="/#concept">
                  Le concept
                </Link>
              </li>
              <li className="pl-[20px]">
                <Link className="hover:underline" href="/#artiste">
                  Les artistes
                </Link>
              </li>
              <li className="pl-[20px]">
                <Link className="hover:underline" href="/#equipe">
                  Qui sommes-nous ?
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="hover:underline" href="/Artiste">
              Page des artistes
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/Equipes">
              Page équipe
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Sitemap;
