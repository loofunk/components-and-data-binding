import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
// import {HeaderComponent} from './header/header.component';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-item/recipe-item.component';
// import {RecipesComponent} from './recipes/recipes.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
     AppComponent,
     HeaderComponent,   
     RecipeBookComponent,
     RecipesComponent,
     RecipeDetailComponent,
      RecipeListComponent,
     RecipeItemComponent,
    //  RecipesComponent  
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
