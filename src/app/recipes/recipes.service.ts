import { EventEmitter, Injectable } from "@angular/core";
import { ingrediants } from "../shared/ingrediants.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
  RecipeSelected = new EventEmitter<recipe>();


  private recipes: recipe[] = [
    new recipe('Pav Bhaji1',
      'This recipe for pav bhaji. the best street food',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/pav-bhaji.jpg',
      [
        new ingrediants('Potato', 5),
        new ingrediants('Tomato', 5),
        new ingrediants('Onion', 5)


      ]),
    new recipe('Vegetables',
      'Vegetables are parts of plants that are consumed by humans or other animals as food.',
      'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
      [
        new ingrediants('Potato', 5),
        new ingrediants('Tomato', 5)
      ]),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  constructor(private shoppinglistService: ShoppingListService) { }
  onAddtoshoppingList(ingrediants: ingrediants[]) {
    // console.log(ingrediants);
    this.shoppinglistService.addIngredientfromrecipelist(ingrediants);

  }
}
