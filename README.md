# La Maisnie des Griffons — Site vitrine

Site statique de l'association de reconstitution historique **La Maisnie des Griffons** (XIIIème siècle).

Construit avec [Astro 5](https://astro.build), déployé sur [Netlify](https://netlify.com), géré via [Decap CMS](https://decapcms.org).

---

## Développement local

**Prérequis :** Node.js 18+

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
npm run preview    # prévisualise le build
```

Les images manquantes affichent un placeholder automatiquement - le site fonctionne sans photos.

---

## Structure du contenu

Tout le contenu éditable est dans `src/content/` et `src/data/site.json`.

```
src/
├── content/
│   ├── membres/       # 5 fiches personnages (.md)
│   ├── animations/    # 22 fiches ateliers (.md)
│   └── sorties/       # 1 fichier .md par sortie
├── data/
│   └── site.json      # Nom, contact, texte "À propos"
└── assets/
    └── uploads/       # Photos (à déposer ici)
        ├── membres/
        ├── animations/
        ├── camp/
        └── sorties/
```

### Ajouter une sortie

Créer `src/content/sorties/ma-sortie-2025.md` :

```markdown
---
title: Provins 2025
date: "2025-06-14"
order: 1
lieu: Provins
thumbnail: /src/assets/uploads/sorties/provins-2025-cover.jpg
thumbnailAlt: La Maisnie des Griffons à Provins 2025
showOnHome: true
photos:
  - image: /src/assets/uploads/sorties/provins-2025-01.jpg
    alt: Description de la photo
---

Texte de présentation de la sortie.
```

Déposer les photos dans `src/assets/uploads/sorties/` puis relancer le build.

---

## Déploiement sur Netlify

### 1. Créer le site sur Netlify

1. Aller sur [app.netlify.com](https://app.netlify.com) et se connecter
2. **Add new site > Import an existing project**
3. Connecter le dépôt Git (GitHub, GitLab ou Bitbucket)
4. Régler les paramètres de build :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
   - **Node version :** 18 ou supérieure (dans *Site settings > Build & deploy > Environment*)
5. Cliquer **Deploy site**

### 2. Configurer le domaine (optionnel)

Dans *Domain management*, ajouter `lamaisniedesgriffons.com` et suivre les instructions DNS.

Mettre à jour `site` dans `astro.config.mjs` avec l'URL définitive :

```js
export default defineConfig({
  site: 'https://lamaisniedesgriffons.com',
  ...
});
```

---

## Interface d'administration (Decap CMS)

L'interface admin est accessible sur `/admin/` une fois le site déployé. Elle permet de créer et modifier les sorties, membres et animations sans toucher aux fichiers.

### 1. Activer Netlify Identity

Dans le dashboard Netlify du site :

1. **Site settings > Identity > Enable Identity**
2. Sous **Registration**, choisir **Invite only** (pour que seuls les admins invités puissent accéder)
3. Sous **Services**, cliquer **Enable Git Gateway**

### 2. Inviter les administrateurs

Dans **Identity > Invite users**, envoyer une invitation par email à chaque administrateur du site.

Les invités recevront un email avec un lien pour créer leur mot de passe.

### 3. Accéder à l'interface

Se rendre sur `https://votre-site.netlify.app/admin/`, se connecter avec l'email et le mot de passe créé à l'étape précédente.

Chaque sauvegarde dans l'interface crée un commit dans le dépôt Git — Netlify redéploie automatiquement dans la foulée (environ 1-2 minutes).

---

## Pages du site

| URL | Description |
|-----|-------------|
| `/` | Accueil : présentation + sorties récentes |
| `/maisnie/` | Liste des personnages |
| `/maisnie/[slug]/` | Fiche individuelle d'un personnage |
| `/camp/` | Présentation du camp |
| `/camp/les-tentes/` | Les tentes |
| `/camp/lauvent/` | L'auvent |
| `/camp/forge-de-campagne/` | La forge de campagne |
| `/camp/cuisine/` | La cuisine |
| `/les-animations/` | Grille des 22 ateliers |
| `/les-animations/[slug]/` | Fiche d'un atelier avec galerie |
| `/sorties/` | Toutes les sorties |
| `/sorties/[slug]/` | Galerie photos d'une sortie |
| `/contact/` | Coordonnées |
| `/mentions-legales/` | Mentions légales |
| `/admin/` | Interface CMS (accès restreint) |
