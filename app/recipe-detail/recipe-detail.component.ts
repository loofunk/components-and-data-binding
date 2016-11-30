import { Recipe } from '../recipe';
import { Component , Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rb-recipe-detail',
    templateUrl: 'recipe-detail.component.html'    
})
export class RecipeDetailComponent {

@Input() selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {
  }

}
