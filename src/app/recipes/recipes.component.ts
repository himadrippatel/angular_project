import { Component, OnInit, Input } from '@angular/core';
import { recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']//,
  // providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedrecipe!: recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.RecipeSelected.subscribe((recipe: recipe) => {
      // debugger;
      this.selectedrecipe = recipe;
    })
  }
}
