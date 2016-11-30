import { Recipe } from '../recipe';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rb-recipes',
    templateUrl: 'recipes.component.html'    
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {
  }

}
