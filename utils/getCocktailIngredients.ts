import type { CocktailData, NullableAndPartialCocktailData } from "@/types/cocktails";

type IngredientKey = `strIngredient${number}`;
type MeasureKey = `strMeasure${number}`;
export type CocktailIngredient = { measure: string, ingredient: string }

function isCocktailDataKey(key: string, data: NullableAndPartialCocktailData): key is keyof CocktailData {
  return key in data
}
function isIngredientKey(key: string): key is IngredientKey {
  return key.startsWith("strIngredient");
}

/**
 * Given a cocktail data object, this function returns an array of its ingredients.
 * Each ingredient is an object with two properties: measure and ingredient.
 * For each ingredient key in the format strIngredient{number}, the function extracts the ingredient name.
 * Correspondingly, it retrieves the measure from the strMeasure{number} key.
 * If an ingredient is present without a corresponding measure, the measure property is set to an empty string.
 * @param cocktailData - a cocktail data object.
 * @returns an array of {@link CocktailIngredient}.
 */
export function getCocktailIngredients(cocktailData: NullableAndPartialCocktailData): CocktailIngredient[] {
  const ingredients: CocktailIngredient[] = [];

  Object.keys(cocktailData).forEach((key) => {
    if (isCocktailDataKey(key, cocktailData) && isIngredientKey(key) && cocktailData[key]) {
      const ingredient = cocktailData[key];
      const index = parseFloat(key.replace('strIngredient', ''))
      const measureKey: MeasureKey = `strMeasure${index}`;
      const measure = (isCocktailDataKey(measureKey, cocktailData) && cocktailData[measureKey])
        ? cocktailData[measureKey] : '';
      ingredients.push({
        measure,
        ingredient
      });
    }
  });

  return ingredients;
}
