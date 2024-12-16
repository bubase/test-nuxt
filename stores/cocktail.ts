import type { CocktailCode, CocktailData, SearchCocktailResponse } from '@/types/cocktails'

export const useCocktailStore = defineStore('cocktail', () => {
  const cocktailData = ref<CocktailData>()

  async function fetchCocktail(cocktailCode: CocktailCode) {
    const result = await $fetch<SearchCocktailResponse>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`)
    cocktailData.value = result.drinks[0]
    return result.drinks[0]
  }

  const mainInfo = computed(() => {
    if (!cocktailData.value) return null
    return {
      name: cocktailData.value.strDrink,
      category: cocktailData.value.strCategory,
      alcoholic: cocktailData.value.strAlcoholic,
      glass: cocktailData.value.strGlass,
    }
  })

  const ingredients = computed(() => {
    if (!cocktailData.value) return []
    return getCocktailIngredients(cocktailData.value)
  })

  const instructions = computed(() =>
    cocktailData.value?.strInstructions || ''
  )

  const imageSrc = computed(() =>
    cocktailData.value?.strDrinkThumb || ''
  )

  return {
    cocktailData,
    fetchCocktail,
    mainInfo,
    ingredients,
    instructions,
    imageSrc
  }
})