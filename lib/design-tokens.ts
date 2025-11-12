import tokens from '@/config/design-tokens.json';

// Allineato alla struttura reale del JSON
export const colors = tokens.palette;
export const motion = tokens.motion;
export const typography = (tokens as any).typography ?? {};
export const layout = (tokens as any).layout ?? {};
export const components = (tokens as any).components ?? {};

export function getColorVar(key: keyof typeof colors) {
  return colors[key];
}