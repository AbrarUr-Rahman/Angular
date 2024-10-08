import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, //!Will Import anywhere
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
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
