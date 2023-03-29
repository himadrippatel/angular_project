import { Component, Output, EventEmitter } from '@angular/core';
import { ingrediants } from 'src/app/shared/ingrediants.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  // @Output() addinlist = new EventEmitter<ingrediants>();

  Name = '';
  Amount = 0;

  constructor(private shoppingListService: ShoppingListService) {

  }



  addinlistfunc() {
    const newIngredient = new ingrediants(this.Name, this.Amount);
    //debugger;
    this.shoppingListService.addinlistfunc(newIngredient);
    // console.log('HEllo');
    // this.addinlist.emit(newIngredient);
  }
}
