import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  //template: '<h1>My first angular app</h1>',
  templateUrl: 'app/SomeTemplate.html'
})

export class AppComponent {  

    title: string = 'My app';    

    person:Person;   

    people = ['john', 'paul', 'ringo', 'george']; 

    peopleArray = Array<Person>();  

    constructor()
    {
      this.person = new Person("Louis", 34,"Cake");  

      this.peopleArray.push(this.person);
      this.peopleArray.push(new Person("mike",29, "more cake"));
      this.peopleArray.push(new Person("Sanj",34, "Ben and Jerry's core sundae"));    
    }
 }


class Person {

  name:string;
  age:number;
  favouriteFood:string;

  constructor(name:string, age: number, favouriteFood:string)
  {
    this.name = name;
    this.age = age;
    this.favouriteFood = favouriteFood;
  }

}