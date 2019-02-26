import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-book/models/recipe';
import { Ingredient } from '../shared/models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Another test recipe',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor() { }

  getRecipes() {
    // Return a copy of the array from this service.
    return this.recipes.slice();
  }


}
