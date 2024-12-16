type MojitoSearchResponse = typeof import('@/utils/mocks/mojito.json')
type MargaritaSearchResponse = typeof import('@/utils/mocks/margarita.json')
type A1SearchResponse = typeof import('@/utils/mocks/a1.json')
type KirSearchResponse = typeof import('@/utils/mocks/kir.json')

export type SearchCocktailResponse = MojitoSearchResponse | MargaritaSearchResponse | A1SearchResponse | KirSearchResponse
export type CocktailData = SearchCocktailResponse['drinks'][number]
export type NullableAndPartialCocktailData = {
  [K in keyof CocktailData]?: CocktailData[K] | null;
};
export type CocktailCode = typeof cocktailCodes[number]['code']