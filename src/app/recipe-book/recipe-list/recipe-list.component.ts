import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeBookService } from 'src/app/receipe-book/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeBookService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
