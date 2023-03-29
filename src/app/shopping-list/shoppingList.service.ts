import { EventEmitter } from "@angular/core";
import { ingrediants } from "../shared/ingrediants.model";

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<ingrediants[]>();

  ingrediants: ingrediants[] = [
    new ingrediants('Apple', 100),
    new ingrediants('Mango', 150)

  ];
  getshoppingList() {
    return this.ingrediants.slice();
  }
  addinlistfunc(newIngredient: any) {
    this.ingrediants.push(newIngredient);
    this.ingredientsChanged.emit(this.ingrediants.slice());
  }
  addIngredientfromrecipelist(ingrediants: ingrediants[]) {
    this.ingrediants.push(...ingrediants);
    this.ingredientsChanged.emit(this.ingrediants.slice());
  }
}
