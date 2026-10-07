# CV de Guillaume Belle — Angular

Site CV d'une page, bilingue (FR / EN), avec thème clair / sombre et cinq « ambiances » visuelles.
Angular 22 : composants standalone, signals, nouvelle syntaxe de template (`@if`, `@for`, `@let`).
Transposé d'une version React d'origine ; le rendu doit rester identique.

## Commandes

- `npm start` — serveur de dev sur http://localhost:4200
- `npx ng build` — à lancer après chaque modification : le build doit passer sans erreur ni avertissement
- `npx ng test --watch=false` — tests unitaires (Vitest + jsdom)

## Git

- Dépôt : https://github.com/Galgo-dev/angular-exo — branche principale `main`.
- **Chaque nouvelle fonctionnalité se développe sur une nouvelle branche** (`feature/<nom-court>`,
  `docs/<nom>` pour la documentation), jamais directement sur `main`. Intégration par pull request.
- Messages de commit en français.

## Structure

```
src/app/
  core/          données, modèles et état global (aucun composant)
    cv.model.ts          types du CV (interface Cv, échelle CECR)
    cv-data.fr.ts        contenu du CV en français
    cv-data.en.ts        contenu du CV en anglais
    cv-data.ts           CV par langue : { fr, en }
    i18n.ts              langues et textes d'interface (UI)
    ambiances.ts         liste des ambiances (libellés FR / EN, couleurs d'aperçu)
    language-store.ts    langue active → cv(), ui(), <html lang>, meta description
    theme-store.ts       clair / sombre (suit le système tant qu'aucun choix n'est fait)
    ambiance-store.ts    ambiance active → <html data-ambiance>
  components/<nom>/<nom>.ts|.html|.css   un dossier par composant
src/styles/      tokens (theme.css), ambiances/*.css, base globale (global.css)
public/          photo, favicon, theme-init.js
```

Nommage Angular v20+ sans suffixe : `timeline.ts` contient `class Timeline` ; les services d'état
sont des `*Store` ; les modèles gardent `.model.ts`.

## Règles du projet

- **Aucun texte en dur dans les composants.** Le contenu du CV vit dans `cv-data.*.ts`, les textes
  d'interface dans `i18n.ts`. Les composants lisent `inject(LanguageStore).ui()` / `.cv()`.
- **Toute modification du contenu se fait dans les deux langues** (`cv-data.fr.ts` et
  `cv-data.en.ts`, mêmes `id`, même nombre d'éléments). Le type `Cv` et le test
  « keep the English CV in sync » le vérifient.
- **Ponctuation par langue** : les préfixes de `i18n.ts` incluent leur ponctuation
  (`'Copier : '` en français, `'Copy: '` en anglais).
- **Couleurs et polices uniquement via les variables CSS** de `src/styles/theme.css` ; une ambiance
  ne redéfinit que des tokens, jamais un composant. Ajouter une ambiance : créer
  `src/styles/ambiances/<id>.css`, l'importer dans `src/styles.css`, l'ajouter à `ambiances.ts`.
- **Clés localStorage partagées** : `cv-theme`, `cv-ambiance`, `cv-lang` sont lues à la fois par les
  stores et par `public/theme-init.js` (exécuté avant Angular pour éviter un flash au chargement).
  Changer une clé ou une valeur par défaut = modifier les deux.
- Accès à localStorage uniquement via `core/storage.ts` (tolérant au stockage indisponible).
- Tailwind est installé (`@import 'tailwindcss'`) mais les styles du CV sont en CSS de composant ;
  les styles hors couche l'emportent sur ceux de Tailwind.
- Ne pas nommer un input `title` (l'attribut natif resterait sur l'hôte et afficherait une infobulle).
- `Sidebar` a `:host { display: contents }` pour que `position: sticky` fonctionne : ne pas retirer.
- Accessibilité à préserver : sections reliées à leur titre (`aria-labelledby`), menu d'ambiance
  navigable au clavier (listbox), `aria-pressed` sur le sélecteur de langue, `prefers-reduced-motion`.
- Au-delà de 10 fichiers modifiés : proposer un plan d'abord.
