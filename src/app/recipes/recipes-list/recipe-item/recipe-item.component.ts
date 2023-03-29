// import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipe!: recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipesService) { }
  onSelected() {
    // this.recipeSelected.emit();
    // debugger;
    this.recipeService.RecipeSelected.emit(this.recipe);
  }
}
