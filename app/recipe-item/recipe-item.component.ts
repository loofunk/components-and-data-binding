import { Recipe } from '../recipe';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-item',
    templateUrl: 'recipe-item.component.html'    
})
export class RecipeItemComponent {

 @Input() recipe: Recipe;
  recipeId: number;

  constructor() {}

  ngOnInit() {
  }

}
