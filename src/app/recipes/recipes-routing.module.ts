import { NgModule } from '@angular/core';
import { RecipesComponent } from '../recipes/recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AuthGuardGuard } from '../auth-guard.guard';
import { RouterModule, Routes } from '@angular/router';

const recipesRoutes: Routes = [
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
        canActivate: [AuthGuardGuard],
      },
      {
        path: ':id', component: RecipeDetailComponent,
      },
      {
        path: ':id/edit', component: RecipeEditComponent,
        canActivate: [AuthGuardGuard],
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
