"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
// import {HeaderComponent} from './header/header.component';
var recipe_book_component_1 = require('./recipe-book/recipe-book.component');
var recipe_detail_component_1 = require('./recipe-detail/recipe-detail.component');
var recipe_list_component_1 = require('./recipe-list/recipe-list.component');
var recipe_item_component_1 = require('./recipe-item/recipe-item.component');
// import {RecipesComponent} from './recipes/recipes.component';
var header_component_1 = require('./header/header.component');
var recipes_component_1 = require('./recipes/recipes.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                recipe_book_component_1.RecipeBookComponent,
                recipes_component_1.RecipesComponent,
                recipe_detail_component_1.RecipeDetailComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_item_component_1.RecipeItemComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map