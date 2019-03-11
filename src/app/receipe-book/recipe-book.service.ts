import { Injectable } from '@angular/core';
import { Recipe } from '../recipe-book/models/recipe';
import { Ingredient } from '../shared/models/ingredient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  recipesChangedEvent = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shrimp Platter',
      'So tasty!',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Shrimp', 8),
        new Ingredient('Green pepper', 1),
      ]),
    new Recipe(
      'Schnitzel',
      'What else is there to say?',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('French fries', 20),
        new Ingredient('Meat', 1),
        new Ingredient('Lemon slice', 2),
      ])
  ];

  constructor() { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChangedEvent.next(this.recipes.slice());
  }

  getRecipes() {
    // Return a copy of the array from this service.
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChangedEvent.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChangedEvent.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChangedEvent.next(this.recipes.slice());
  }
}
