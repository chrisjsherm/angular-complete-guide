import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from 'src/app/shared/models/ingredient';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeBookService } from 'src/app/receipe-book/recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeBookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = Number(params['id']);
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  onAddIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
