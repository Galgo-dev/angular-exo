// Chargé de façon bloquante dans <head> : pose data-theme, data-ambiance et lang avant le premier rendu.
// Les clés doivent rester identiques à celles de src/app/core/theme-store.ts, ambiance-store.ts et language-store.ts.
(function () {
  try {
    var root = document.documentElement;
    var theme = localStorage.getItem('cv-theme');
    if (theme === 'dark' || theme === 'light') {
      root.dataset.theme = theme;
    }
    var ambiance = localStorage.getItem('cv-ambiance');
    if (ambiance && ambiance !== 'electric') {
      root.dataset.ambiance = ambiance;
    }
    var lang = localStorage.getItem('cv-lang');
    if (lang === 'fr' || lang === 'en') {
      root.lang = lang;
    }
  } catch (error) {
    /* stockage indisponible : thème du système, ambiance et langue par défaut */
  }
})();
