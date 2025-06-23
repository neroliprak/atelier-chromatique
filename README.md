
Le site est hébergé aujourd'hui sur Vercel : https://atelier-chromatique.vercel.app/ 

Le code source est disponible publiquement sur GitHub à l'adresse suivante : github.com/neroliprak/atelier-chromatique. Vous pouvez donc également récupérer le code de cette manière pour l'héberger.

**Hébergement sur Vercel**
Le site a été hébergé gratuitement sur Vercel, une plateforme adaptée aux projets en React/Next.js. Elle permet de mettre en ligne des sites statiques sans configuration complexe ni base de données.
Pour le déployer, il suffit de posséder un compte Vercel et GitHub, de récupérer les fichiers du projet sur GitHub (github.com/neroliprak/atelier-chromatique), puis de créer un nouveau projet (“New Project”) sur Vercel. Celui-ci détecte automatiquement qu’il s’agit d’un projet Next.js et procède à la mise en ligne rapidement. 

**Hébergement chez un hébergeur classique**
Pour héberger le site chez un hébergeur web traditionnel (comme OVH, O2switch ou autre), il faut d’abord compiler le site pour le rendre lisible par un serveur classique. Avec Next.js, cela se fait en exécutant la commande npm run build, puis npm run export pour générer une version statique du site.
Les fichiers se retrouveront dans le dossier out/ et le contenu pourra ensuite être envoyé via FTP (ex : FileZilla) sur l’espace web fourni par l’hébergeur. 

**Héberger et visualiser le site en local**
Pour utiliser le site localement sur votre ordinateur, vous devez avoir Node.js installé. Télécharger le projet depuis GitHub et le mettre dans un dossier. Ouvrez le dossier dans un éditeur de code (Vscode), et taper la commande pour installer les dépendances npm install. Ensuite pour le lancer : npm run dev. Une adresse sera indiqué, vous pourrez ainsi le visualiser en local. 

**Maintenance du site** 
L’ensemble des artistes et de leurs œuvres est centralisé dans le fichier artistes.json. Il vous suffit de modifier ou d’ajouter les données en copiant-collant ou en éditant le texte selon vos besoins.


*** ---------------------------------------------------------------------- ***

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
