import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeBookService } from 'src/app/receipe-book/recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeBookService) { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }
}
