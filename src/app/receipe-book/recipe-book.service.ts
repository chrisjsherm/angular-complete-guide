import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-book/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe(
      'Another test recipe',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  constructor() { }

  getRecipes() {
    // Return a copy of the array from this service.
    return this.recipes.slice();
  }


}
