import {Recipe} from "./recipe.model";
export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Yay Im testing things', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new Recipe('Another Test Recipe', 'Yay Im testing things', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
