import type { CocktailCode } from "@/types/cocktails"

export const cocktailCodes = [
  { id: 1, code: 'margarita' },
  { id: 2, code: 'mojito' },
  { id: 3, code: 'a1' },
  { id: 4, code: 'kir' }
] as const

export function getIsCocktailCode(name: string): name is CocktailCode {
  return cocktailCodes.some(({ code }) => code === name)
}