// Chargé de façon bloquante dans <head> : pose data-theme et data-ambiance avant le premier rendu.
// Les clés doivent rester identiques à celles de src/app/core/theme-store.ts et src/app/core/ambiance-store.ts.
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
  } catch (error) {
    /* stockage indisponible : thème du système et ambiance par défaut */
  }
})();
