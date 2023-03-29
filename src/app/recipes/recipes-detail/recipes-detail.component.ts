import { Component, Input } from '@angular/core';
import { ingrediants } from 'src/app/shared/ingrediants.model';
import { recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent {

  @Input() recipes!: recipe;

  constructor(private recipeService: RecipesService) { }
  onAddShoppingList() {
    this.recipeService.onAddtoshoppingList(this.recipes.Ingredient);
  }
}
