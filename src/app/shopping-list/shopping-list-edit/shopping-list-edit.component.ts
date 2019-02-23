import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') itemNameInput: ElementRef;
  @ViewChild('amountInput') itemAmountInput: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.itemNameInput.nativeElement.value,
      this.itemAmountInput.nativeElement.value);

    this.itemAdded.emit(newIngredient);
  }
}
