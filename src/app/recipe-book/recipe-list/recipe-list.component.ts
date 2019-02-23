import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  words = 'Chris';
  recipes: Recipe[] = [
    new Recipe(
    'A test recipe',
    'this is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe(
      'Another test recipe',
      'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
    ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
