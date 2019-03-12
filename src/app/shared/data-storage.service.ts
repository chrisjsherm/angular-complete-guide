import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { RecipeBookService } from '../recipes/recipe-book.service';
import { Recipe } from '../recipes/models/recipe';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  readonly DATABASE_URL = 'https://schnitzel-f436e.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeBookService,
    private authService: AuthService,
  ) { }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put(
      this.DATABASE_URL + '?auth=' + token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get<Recipe[]>(
      this.DATABASE_URL + '?auth=' + token
    ).pipe(
      map(
        (recipes) => {
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
