import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // @Output() recipewasSelcted = new EventEmitter<recipe>();

  newRecipesToggle = false;
  recipeName = '';
  recipeDesc = '';
  recipeImagePath = '';

  recipes: recipe[] = [];
  constructor(private recipesService: RecipesService) { }
  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    // console.log(this.recipes);
  }
  // onrecipeSelected(recipe: recipe) {
  //   this.recipewasSelcted.emit(recipe);
  // }
  newRecipes() {
    this.recipes.push(new recipe(this.recipeName, this.recipeDesc, this.recipeImagePath, []));
  }
}
