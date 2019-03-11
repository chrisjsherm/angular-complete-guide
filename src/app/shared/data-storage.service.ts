import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeBookService } from '../receipe-book/recipe-book.service';
import { Recipe } from '../recipe-book/models/recipe';
import { map } from 'rxjs/operators';
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
    ).pipe(
      map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe.hasOwnProperty('ingredients')) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          console.log(recipes);
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
