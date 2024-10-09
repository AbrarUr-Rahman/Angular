import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true, //!Will Import anywhere
  imports: [RouterOutlet, HomeComponent, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent 
// implements OnInit
{
    // title="Code With Abrar";

    // //#Constructor
    // //*Loads First on load
    // constructor(){
    //   console.log('constructor')
    // }

    // //!Life Cycle
    // //*Loads after constructor
    // ngOnInit(){
    //   console.log('ngoninit')
    //   // this.changeTitle();
    // }

    // changeTitle(){
    //   this.title="Coding Techniques"
    // }


    //!------------New Stuff 1-----------------//
  
    //!------------New Stuff 1-----------------//

}
