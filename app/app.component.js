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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My app';
        this.people = ['john', 'paul', 'ringo', 'george'];
        this.peopleArray = Array();
        this.person = new Person("Louis", 34, "Cake");
        this.peopleArray.push(this.person);
        this.peopleArray.push(new Person("mike", 29, "more cake"));
        this.peopleArray.push(new Person("Sanj", 34, "Ben and Jerry's core sundae"));
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template: '<h1>My first angular app</h1>',
            templateUrl: 'app/SomeTemplate.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Person = (function () {
    function Person(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }
    return Person;
}());
//# sourceMappingURL=app.component.js.map