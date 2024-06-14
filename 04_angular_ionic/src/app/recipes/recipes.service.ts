import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    ingredients: ['French Fries', 'Pork Meat', 'Salad']
  },{
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG',
    ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
  },];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe | undefined {
      var x = this.recipes.find(recipe => {
        return recipe.id === recipeId;
      });
      return x;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
