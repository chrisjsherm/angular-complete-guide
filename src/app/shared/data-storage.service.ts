import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeBookService } from '../receipe-book/recipe-book.service';
import { Recipe } from '../recipe-book/models/recipe';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  readonly DATABASE_URL = 'https://schnitzel-f436e.firebaseio.com/recipes.json';

  constructor(
    private http: Http,
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

    return this.http.get(
      this.DATABASE_URL + '?auth=' + token
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
