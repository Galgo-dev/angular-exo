let counter = 0;

/** Identifiant unique dans la page, pour relier les éléments ARIA entre eux. */
export function uniqueId(prefix: string): string {
  counter += 1;
  return `${prefix}-${counter}`;
}
