"use client";
import "./artiste.css";

import Navbar2 from "../Components2/Navbar/Navbar2";
import { useState } from "react";
import Badge from "../Components2/Badge/Badge";
import Footer from "../Components2/Footer/Footer";

const artists = [
  {
    nom: "Bari",
    prenom: "Abderhaman",
    bio: `Dans cette toile vive et intense, Abderhaman Bari laisse libre cours à son imaginaire. Les couleurs semblent jaillir de la surface : le bleu profond du bas évoque une mer agitée ou un rêve en mouvement, tandis que le rouge et l’orange, en vagues incandescentes, rappellent la chaleur d’un feu ou les battements d’un cœur en pleine effusion.

    Le rose du ciel, parsemé de projections, donne à l’ensemble une dimension presque cosmique, entre ciel et terre, entre calme et chaos.
    C’est une peinture de sensations, de spontanéité, de gestes amples et de liberté assumée. Elle ne cherche pas à représenter, mais à exprimer. Et c’est dans cette énergie brute que réside toute sa force.
    `,
    couleur: "#F8B8D3",
    couleurClaire: "#FFE7F1",
    couleurName: "Salle Rose",
    tache: "img/rose.png",
    images: ["img/Compressed_Salle rose/Abderhaman-Bari-Salle-rose.jpg"],
    interview: null,
  },
  {
    nom: "Roynette",
    prenom: "Adrien",
    bio: `Cette toile, offerte en cadeau au chef d’établissement de la Résidence du Maine, reflète toute la joie et l’espoir d’Adrien Roynette, son auteur.
    Cette œuvre arbore mille couleurs, toutes plus vives les unes que les autres. Formes et teintes s’entrelacent en une composition harmonieuse et lumineuse. Pour M. Roynette, publier et rendre visibles ses créations est une forme de témoignage. Son but : redonner espoir en la vie à tous ceux qui, comme lui, ont traversé ou traversent une période difficile et de doute.
    `,
    couleur: "#F8B8D3",
    couleurName: "Salle Rose",
    couleurClaire: "#FFE7F1",
    tache: "img/rose2.png",
    images: ["img/Compressed_Salle rose/Adrien-Roynette-Salle-rose.jpg"],
    interview: "https://youtu.be/z2hzT3HkwKw",
  },
  {
    nom: "Mayolle",
    prenom: "Alexandra",
    bio: `Peinte à la Résidence du Maine, cette toile est l’expression brute des émotions d’Alexandra Mayolle. 
    Les couleurs s’y mêlent en un ensemble harmonieux et contrasté. Des nuances de bleu décorent les coins en haut à gauche et en bas à droite de la toile, tandis que les deux autres coins opposés sont peints de différentes teintes de jaune. Au centre, le rouge et le violet se détachent sur un fond vert, marron et blanc. De fins fils noirs segmentent les couleurs, créant une atmosphère à la fois complète et complexe.
    Alexandra, de sa main gauche, retranscrit ainsi son monde sur une toile colorée et abstraite aux tons variés. Pour elle, la peinture est une forme d’expression honnête et transparente, où chaque émotion se transforme en un nuancier diversifié. 
    `,
    couleur: "#D0D0D0",
    couleurName: "Salle Noire",
    couleurClaire: "#F2EEF3",
    tache: "img/noire.png",
    images: ["img/Compressed_Salle noire/Alexandra-Mayolle-Salle-noir-(3).jpg"],
    interview: "https://youtu.be/qRCVqbjsvlw ",
  },
  {
    nom: "Layet",
    prenom: "Bénédicte",
    bio: `Dans cette œuvre ancrée dans le vert, Bénédicte Layet explore ce qui relie : la nature, les émotions, le corps. Le vert symbolise ici l’équilibre, la sérénité, mais aussi le lien aux éléments naturels, à la respiration, au vivant.
    Elle travaille par couches, laisse advenir les formes et les textures. Son processus est intuitif, presque méditatif. Le tableau devient un espace de silence, d’apaisement, un moment suspendu.
    Bénédicte ne raconte pas d’histoire précise : elle ouvre une porte vers le sensible, vers ce qui ne se dit pas avec des mots. Le vert devient souffle, présence, une invitation à ralentir et à ressentir pleinement.
    `,
    couleur: "#6CE297",
    couleurName: "Salle Vert",
    couleurClaire: "#DAFFE8",
    tache: "img/verte.png",
    images: ["img/Compressed_Salle verte/Bénédicte-Layet-Salle-verte.jpg"],
    interview: null,
  },
  {
    nom: "Piquard",
    prenom: "Brigitte",
    bio: `Brigitte Piquard explore ici ce qu’elle préfère : le visage, reflet de ses émotions et de sa vision du monde.

    Ici, le visage bleu intense domine la composition, contrastant avec les touches d’orange qui viennent l’entourer, l’équilibrer, sans jamais l’écraser. L’artiste aime accorder les couleurs, les confronter même, mais “sans qu’elles ne se heurtent”, comme elle le dit dans son interview.
    
    La chevelure, les yeux et la bouche sont remplis de nombreux détails, chacun avec sa propre texture et son propre rythme visuel qui attire le regard. Chaque partie paraît presque vivante, indépendante, mais reste parfaitement liée au reste du visage. Cette richesse montre à quel point l’artiste observe avec précision et passion, explorant sans cesse formes et émotions.
    `,
    couleur: "#7FD7F9",
    couleurName: "Salle Bleu",
    couleurClaire: "#DEF6FF",
    tache: "img/bleu.png",
    images: ["img/Compressed_Salle bleue/Brigitte-Piquard-Salle-bleue.jpg"],
    interview: "https://youtu.be/Q9Zmm108X8I ",
  },
  {
    nom: "Semon",
    prenom: "Catherine",
    bio: `Dans cette œuvre, Catherine Semon mêle art et engagement en peignant en direct lors du festival Solidays, événement dédié à la lutte contre le sida. Devant un public venu célébrer la solidarité, elle propose une image forte et colorée d’un pommier aux fruits singuliers : chaque pomme porte le ruban rouge, symbole mondial de la lutte contre le VIH.
    L’arbre, ancré sur un fond bleu vibrant, déploie ses branches comme une célébration de la vie, de l’espoir, mais aussi de la diversité. Chaque fruit devient un hommage à celles et ceux concernés par la maladie. 
    Avec des gestes spontanés et une palette éclatante, l’artiste transmet une émotion vive, accessible, qui touche autant qu’elle questionne. Son arbre n’est pas seulement un symbole de renaissance : c’est un manifeste coloré pour une humanité sensible, solidaire et profondément vivante.
    `,
    couleur: "#7FD7F9",
    couleurName: "Salle Bleu",
    couleurClaire: "#DEF6FF",
    tache: "img/bleu2.png",
    images: ["img/Compressed_Salle bleue/Catherine-Semon-Salle-bleue.jpg"],
    interview: "https://youtu.be/7I_Sv2Z-6pk",
  },
  {
    nom: "Lecam",
    prenom: "Dominique",
    bio: `Cette toile, réalisée par Dominique LECAM au sein de la Délégation de Carcassonne, évoque un tourbillon d’énergie et de lumière. Les couleurs vives et contrastées semblent s’élancer dans un mouvement céleste, comme une éruption de sensations et d’émotions. Le regard est happé par la force de cette composition presque cosmique.

    Dominique, accompagné·e de son auxiliaire, a choisi la technique de la coulée de peinture. Ce procédé lui permet, malgré les limitations liées à son handicap, d’exprimer pleinement sa créativité : en sélectionnant les teintes, en manipulant la toile, Dominique compose sans contrainte. Chaque geste devient une extension de sa volonté artistique.
    
    À travers cette œuvre, c’est un monde intérieur qui se révèle, vibrant et libre. Une invitation à voir au-delà du visible, à ressentir l’élan vital que chacun de nous abrite. Cette peinture est une affirmation puissante : la création reste un territoire accessible à tou·te·s.
    
    `,
    couleur: "#F8B8D3",
    couleurName: "Salle Rose",
    couleurClaire: "#FFE7F1",
    tache: "img/rose.png",
    images: ["img/Compressed_Salle rose/Dominique-Lecam-Salle-rose.jpg"],
    interview: null,
  },
  {
    nom: "Marchand",
    prenom: "Éric",
    bio: `Allongé sur le côté, Eric travaillait lentement, avec patience et précision, malgré les contraintes imposées par la maladie. Incapable de se mouvoir librement, il peignait par strates, couche après couche, en demandant parfois qu’on retourne la toile pour poursuivre le motif.
    L’œuvre superpose l’acrylique et le papier de soie froissé. Ce papier, posé avec délicatesse, crée des variations de texture et de lumière, jouant avec la transparence. 
    En haut à gauche, un triangle vert clair surgit comme une élévation végétale, tandis que le jaune éclaboussé trace un chemin de lumière vers une zone plus chaude, plus dense, en bas à droite. Les textures et couleurs se déposent comme des couches de terre, de souvenirs ou de sensations, évoquant une lente transformation du paysage intérieur.
    Ce tableau, à la fois minéral et sensible, géologique et intime, raconte une traversée immobile où chaque sédimentation devient un acte de création poétique. Malgré l’immobilité du corps, l’œuvre est en mouvement – un paysage intérieur, stratifié, vibrant.
    `,
    couleur: "#EED464",
    couleurName: "Salle Jaune",
    couleurClaire: "#FFF5CA",
    tache: "img/jaune.png",
    images: ["img/Compressed_Salle jaune/Eric-Marchand-Salle-jaune.jpg"],
    interview: null,
  },
  {
    nom: "Caldaru",
    prenom: "Ionut",
    bio: `Ionut CALDARU, jeune artiste accompagné par l’IEM du Petit Tremblay, a réalisé cette œuvre saisissante au fil d’un atelier d’expression plastique mené tout au long de l’année.
    Ce tableau, aux textures épaisses et rugueuses, évoque une terre en mutation. Ionut a travaillé la matière comme on sculpte un relief : chaque coup de pinceau, chaque coulée de peinture devient une faille, un soulèvement, une éruption. Le geste est libre, instinctif, presque volcanique. Peut-être assiste-t-on ici à la naissance d’un paysage, ou à l’écho d’une explosion souterraine.
    La palette, dominée par des noirs profonds, des rouges en fusion et des éclats de vert ou de jaune, dialogue avec la violence et la beauté brute de la nature. C’est une croûte terrestre vivante, en devenir, où l’on sent le chaos, mais aussi la création.
    À travers cette exploration sensorielle de la matière, Ionut a pu canaliser ses émotions, explorer ses ressentis, et se réconcilier avec un monde intérieur en mouvement. Son tableau est plus qu’une peinture : c’est une terre imaginée, un territoire intime, un volcan en veille.
    `,
    couleur: "#D0D0D0",
    couleurName: "Salle Noire",
    couleurClaire: "#F2EEF3",
    tache: "img/noire2.png",
    images: ["img/Compressed_Salle noire/Ionut-Caldaru-Salle-noir.jpg"],
    interview: null,
  },
  {
    nom: "Pichery",
    prenom: "Jean-Daniel",
    bio: `Jean-Daniel, résident en situation de handicap, a réalisé ce grand vitrail en collaboration avec les ateliers Loir de Chartres. Ce projet est né d’une exposition organisée au sein de la résidence Jacques Bourgarel, où l’art vient à la rencontre des habitants.
    Pendant un an, Jean-Daniel a agencé patiemment des dalles de verre coloré pour créer un chemin lumineux, guidé par le jaune du soleil et entouré de bleu, vert et rouge. Chaque couleur symbolise une émotion, un passage, un rêve. Le bleu rappelle les vitraux de Chartres, tandis que le jaune évoque un voyage vers l’ailleurs.
    Grâce à ce travail, Jean-Daniel a pu s’apaiser, se concentrer et se dépasser. Les ateliers Loir de Chartres ont finalisé l’œuvre en coulant la résine noire, soudant ainsi le verre coloré chargé d’émotions. Ce vitrail est l’aboutissement d’un projet personnel et artistique fort, symbole de transformation et de reconnaissance.
    `,
    couleur: "#D0D0D0",
    couleurClaire: "#F2EEF3",
    couleurName: "Salle Noire",
    tache: "img/noire.png",
    images: ["img/Compressed_Salle noire/Jean-Daniel-PICHERY-Salle-noir.jpg"],
    interview: null,
  },
  {
    nom: "Capdevielle",
    prenom: "Julie",
    bio: `Dans cette œuvre pleine de fantaisie, Julie Capdevielle revisite Snoopy, personnage iconique de la pop culture, avec une liberté de ton et une joie communicative. Détourné, stylisé, presque transformé en chef d’orchestre, le célèbre chien devient ici le héros d’une scène étonnante, entouré de créatures imaginaires aux allures joyeusement absurdes.   

    L’univers de Julie est à la fois drôle et décalé, nourri de références contemporaines et d’un regard curieux sur le monde. Les textures, les couleurs et les formes semblent se répondre dans une composition vivante, spontanée, presque enfantine, mais jamais naïve.
    
    Derrière cette légèreté apparente se cache une vraie modernité : celle d’un regard qui célèbre la culture populaire avec tendresse et inventivité.
    `,
    couleur: "#F0EBCD",
    couleurClaire: "#FFFDF3",
    couleurName: "Salle Blanche",
    tache: "img/blanc.png",
    images: ["img/Compressed_Salle blanche/Julie-Capdevielle-Salle-banche.jpg"],
    interview: null,
  },
  {
    nom: "Campet",
    prenom: "Kévin",
    bio: `Ce tableau vibrant est le fruit d’une expérimentation à la fois technique et sensible. Pour sa création, Kévin Campet a d’abord utilisé une méthode originale : une technique de peinture au ballon, qui permet d’imprimer des formes par superposition. Très vite, il s’est réapproprié le geste, y insufflant sa propre énergie en ajoutant des projections dynamiques de peinture.
    Sur un fond noir profond, les nuances de vert et de jaune se déploient comme des éclats de lumière ou des formes végétales en mouvement. Le contraste intense fait ressortir chaque trace, chaque geste, dans une composition qui semble à la fois contrôlée et organique.
    Au-delà de l’esthétique, cette œuvre incarne un véritable défi personnel. Atteint d’infirmité motrice cérébrale (IMC), Kévin a su transformer la contrainte en force, utilisant l’art pour affirmer sa maîtrise du mouvement, tout en laissant place à l’imprévu. Cette peinture devient ainsi le reflet d’une liberté conquise, d’une volonté de créer malgré tout — ou peut-être grâce à tout.
    `,
    couleur: "#6CE297",
    couleurClaire: "#DAFFE8",
    couleurName: "Vert",
    tache: "img/verte2.png",
    images: ["img/Compressed_Salle verte/Kévin-Campet-Salle-verte.jpg"],
    interview: null,
  },
  {
    nom: "Kammerer",
    prenom: "Olivier",
    bio: `Sous une pluie de formes et de couleurs, une maison émerge, comme un souvenir qui flotte entre rêve et réalité. Olivier Kammerer commence toujours ses toiles par un fond abstrait, riche en textures et en couleurs, réalisé de manière spontanée. Une fois cette base posée, il vient y ajouter un élément figuratif, souvent simple mais fort, comme ici cette maison, qui se détache du fond.
    Dominée par des teintes roses et violettes, cette œuvre respire la joie et l’imaginaire. Le violet et le rose, que M. Kammerer affectionne tout particulièrement, apportent à la scène une douceur vibrante, presque magique. 
    Cette peinture est à découvrir lentement, au rythme du regard, de l’humeur, de l’instant. Olivier Kammerer y affirme son goût pour la création libre, l’amour des couleurs et la poésie du geste.
    `,
    couleur: "#F8B8D3",
    couleurClaire: "#FFE7F1",
    couleurName: "Rose",
    tache: "img/rose2.png",
    images: ["img/Compressed_Salle rose/Olivier-Kammerer-Salle-rose.jpg"],
    interview: "https://youtu.be/2AduiDtVj_8",
  },
  {
    nom: "Fleury",
    prenom: "Thomas",
    bio: `Né à Épinal en 1983, Thomas Fleury est tailleur de pierres de formation, mais c’est dans le dessin qu’il construit ses mondes les plus fascinants. Autodidacte, il débute très jeune avec la peinture à l’huile, avant de se tourner vers l’encre de Chine et les Rotring, outils devenus sa signature.
    Ses œuvres sont de véritables explorations graphiques, où se déploient de vastes cités imaginaires. Tantôt merveilleuses, tantôt inquiétantes, ces villes labyrinthiques s'étendent sur de grands formats, peuplées de créatures hybrides, de silhouettes énigmatiques et d’architectures qui semblent défier les lois de la gravité. Chaque trait est précis, chaque détail compte. Le regard s’y perd avec fascination, comme happé dans un rêve éveillé.. 
    `,
    couleur: "#D0D0D0",
    couleurClaire: "#F2EEF3",
    couleurName: "Noire",
    tache: "img/noire2.png",
    images: ["img/Compressed_Salle noire/Thomas Fleury - Salle noir 3.jpg"],
    interview: null,
  },
  {
    nom: "Bourdon",
    prenom: "Yves",
    bio: `Yves Bourdon peint des paysages, des ambiances, des univers, des instants. Dans cette toile, il nous transporte au cœur d’un monde vibrant, où la présence du vent semble faire chanter les herbes hautes. Les jaunes ardents, les oranges flamboyants et les bleus profonds s’entrelacent dans une danse lumineuse, comme autant de notes suspendues dans l’air.
    Ici, la couleur ne décrit pas seulement : elle respire, elle vibre. Les touches sont légères, presque fragiles, mais pleines d’une énergie qui semble jaillir du sol même. Le graphisme, libre et fluide, évoque un souffle invisible. Le regard se perd dans cette matière en mouvement, entre abstraction et évocation, comme si le paysage ne se laissait jamais totalement saisir, toujours changeant, toujours vivant.
    Bourdon ne représente pas : il évoque. Il capte un instant fugace – un vent qui passe, une lumière qui vacille, une émotion qui affleure. Chaque trace de pinceau semble guidée par la musique intérieure du peintre, une mélodie silencieuse que l’on croit entendre au creux de cette nature en effervescence.
    `,
    couleur: "#7FD7F9",
    couleurClaire: "#DEF6FF",
    couleurName: "Bleu",
    tache: "img/bleu2.png",
    images: ["img/Compressed_Salle bleue/Yves-Bourdon-Salle-bleue-(2).jpg"],
    interview: null,
  },
];

const BioArtiste = ({ texte }) => {
  const [voirPlus, setVoirPlus] = useState(false);

  const toggleVoirPlus = () => {
    setVoirPlus(!voirPlus);
  };

  return (
    <div className="relative">
      <p
        className={`transition-all duration-300 ease-in-out ${
          voirPlus ? "line-clamp-none" : "line-clamp-6"
        }`}
      >
        {texte}
      </p>
      <button
        onClick={toggleVoirPlus}
        className="mt-2 text-[#1e2127] underline  cursor-pointer"
      >
        {voirPlus ? "Voir moins" : "Voir plus"}
      </button>
    </div>
  );
};

const Artiste = () => {
  return (
    <>
      <Navbar2 />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] p-4 resp-py mt-[80px]">
        {artists.map((artist, index) => (
          <div
            key={index}
            className={`border-t-1 p-4 text-black gap-[10px] hover:bg-[${artist.couleurClaire}]`}
          >
            <img src={artist.images} className="h-[400px] w-full" alt="" />
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg mb-8 mt-8">
                {artist.prenom} {artist.nom}
              </h3>
              <Badge couleur={artist.couleur} children={artist.couleurName} />
            </div>

            <BioArtiste texte={artist.bio} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Artiste;
