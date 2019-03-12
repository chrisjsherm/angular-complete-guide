import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
const appRoutes: Routes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full',
  },
  {
    path: 'shopping-list', component: ShoppingListComponent,
  },
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
