import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  items = [{ name: '', quantity: null }];
  newItemName = '';
  newItemQuantity = null;
  index = 0;

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    if (this.newItemName && this.newItemQuantity) {
      this.items.push({
        name: this.newItemName,
        quantity: this.newItemQuantity,
      });
      this.newItemName = '';
      this.newItemQuantity = null;
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}