import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../../shared/models/ingredient';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeBookService } from '../recipe-book.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

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
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{
      shopppingList: {
        ingredients: Ingredient[]
      }
    }>
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = Number(params['id']);
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  onAddIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(
      ingredients,
    ));

  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }
}
