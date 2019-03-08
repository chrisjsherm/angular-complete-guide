import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeBookService } from '../receipe-book/recipe-book.service';
import { Recipe } from '../recipe-book/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  readonly DATABASE_URL = 'https://schnitzel-f436e.firebaseio.com/recipes.json';
  constructor(
    private http: Http,
    private recipeService: RecipeBookService
  ) { }

  storeRecipes() {
    return this.http.put(
      this.DATABASE_URL,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http.get(
      this.DATABASE_URL
    ).subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
