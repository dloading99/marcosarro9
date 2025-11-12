import tokens from '@/config/design-tokens.json';

export const colors = tokens.colors;
export const typography = tokens.typography;
export const layout = tokens.layout;
export const components = tokens.components;

export function getColorVar(key: keyof typeof colors) {
  return colors[key];
}
