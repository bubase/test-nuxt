import { describe, it, expect } from "vitest";
import type { NullableAndPartialCocktailData } from "@/types/cocktails";

describe("getCocktailIngredients", () => {
  it("should return a list of ingredients with measures", () => {
    const cocktailData: NullableAndPartialCocktailData = {
      idDrink: "12345",
      strDrink: "Margarita",
      strIngredient1: "Tequila",
      strIngredient2: "Triple sec",
      strIngredient3: "Lime juice",
      strIngredient4: null,
      strMeasure1: "1 1/2 oz",
      strMeasure2: "1/2 oz",
      strMeasure3: "1 oz",
      strMeasure4: null,
    }

    const result = getCocktailIngredients(cocktailData);
    expect(result).toEqual([
      { measure: "1 1/2 oz", ingredient: "Tequila" },
      { measure: "1/2 oz", ingredient: "Triple sec" },
      { measure: "1 oz", ingredient: "Lime juice" },
    ]);
  });

  it("should handle missing measures and ingredients gracefully", () => {
    const cocktailData: NullableAndPartialCocktailData = {
      idDrink: "67890",
      strDrink: "Mystery Drink",
      strIngredient1: "Vodka",
      strIngredient2: null,
      strIngredient3: "Cranberry juice",
      strIngredient4: "Lime",
      strMeasure1: "2 oz",
      strMeasure2: null,
      strMeasure3: "3 oz",
      strMeasure4: "",
    }
    const result = getCocktailIngredients(cocktailData);
    expect(result).toEqual([
      { measure: "2 oz", ingredient: "Vodka" },
      { measure: "3 oz", ingredient: "Cranberry juice" },
      { measure: "", ingredient: "Lime" },
    ]);
  });

  it("should return an empty array if there are no ingredients", () => {
    const cocktailData: NullableAndPartialCocktailData = {
      idDrink: "00000",
      strDrink: "Empty Drink",
    }

    const result = getCocktailIngredients(cocktailData);
    expect(result).toEqual([]);
  });
});