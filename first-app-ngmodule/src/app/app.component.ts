import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title="Code With Abrar";

  //#Constructor
  //*Loads First on load
  constructor(){
    console.log('constructor')
  }

  //!Life Cycle
  //*Loads after constructor
  ngOnInit(){
    console.log('ngoninit')
    // this.changeTitle();
  }

  changeTitle(){
    this.title="Coding Techniques"
  }
}
