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
