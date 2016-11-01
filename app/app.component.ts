import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  //template: '<h1>My first angular app</h1>',
  templateUrl: 'app/SomeTemplate.html',  
})

export class AppComponent {  

    name: string = 'Liam';
    age:number = 51;

  constructor()
  {

  }


 }


class Moo {

    pudding:string= 'murrr';
}