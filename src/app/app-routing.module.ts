import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
const appRoutes: Routes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full',
  },
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      {
        path: '', component: RecipeStartComponent,
      },
      // Put 'new' before the dynamic ':id' path so angular doesn't think 'new'
      // is an id.
      {
        path: 'new', component: RecipeEditComponent,
      },
      {
        path: ':id', component: RecipeDetailComponent,
      },
      {
        path: ':id/edit', component: RecipeEditComponent,
      },
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent,
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'signin', component: SigninComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
