import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeBookService } from 'src/app/receipe-book/recipe-book.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeBookService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  getIngredientsControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSave() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/), // Execute the method because it acts as a factory.
      ]),
    }));
}

  private initForm() {
  let recipeName = '';
  let receipeImagePath = '';
  let recipeDescription = '';
  let recipeIngredients = new FormArray([]);

  if (this.editMode) {
    let recipe = this.recipeService.getRecipe(this.id);
    recipeName = recipe.name;
    recipeDescription = recipe.description;
    receipeImagePath = recipe.imagePath;
    if (recipe.ingredients) {
      for (const ingredient of recipe.ingredients) {
        recipeIngredients.push(new FormGroup({
          name: new FormControl(ingredient.name, Validators.required),
          amount: new FormControl(ingredient.amount, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/), // Execute the method because it acts as a factory.
          ]),
        }));
      }
    }
  }

  this.recipeForm = new FormGroup({
    name: new FormControl(recipeName, Validators.required),
    imagePath: new FormControl(receipeImagePath, Validators.required),
    description: new FormControl(recipeDescription, Validators.required),
    ingredients: recipeIngredients,
  });
}
}
