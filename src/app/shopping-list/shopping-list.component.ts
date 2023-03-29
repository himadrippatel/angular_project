import { Component, OnInit } from '@angular/core';
import { ingrediants } from '../shared/ingrediants.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  /*ingrediants: ingrediants[] = [
    new ingrediants('Apple', 100),
    new ingrediants('Mango', 150)

  ];*/
  ingrediants: ingrediants[] = [];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {
    this.ingrediants = this.shoppingListService.getshoppingList();
    this.shoppingListService.ingredientsChanged.subscribe((ingrediants: ingrediants[]) => {
      this.ingrediants = ingrediants;
    })
  }
  // addinlistfunc(newIngredient: any) {
  //   this.ingrediants.push(newIngredient);
  // }
}
