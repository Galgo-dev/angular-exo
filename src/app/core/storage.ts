/** Accès tolérant à localStorage : s'il est indisponible, aucune valeur n'est lue ni enregistrée. */
export function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* stockage indisponible : le choix vaut pour cette visite seulement */
  }
}
