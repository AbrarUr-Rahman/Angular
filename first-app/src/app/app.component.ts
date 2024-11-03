// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from "./home/home.component";

// @Component({
//   selector: 'app-root',
//   standalone: true, //!Will Import anywhere
//   imports: [RouterOutlet, HomeComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit{
//     // title="Code With Abrar";

//     // //#Constructor
//     // //*Loads First on load
//     // constructor(){
//     //   console.log('constructor')
//     // }

//     // //!Life Cycle
//     // //*Loads after constructor
//     // ngOnInit(){
//     //   console.log('ngoninit')
//     //   // this.changeTitle();
//     // }

//     // changeTitle(){
//     //   this.title="Coding Techniques"
//     // }


    //!------------New Stuff 1-----------------//
    import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
// import { HeaderComponent } from './main-app/header/header.component';
// import { FooterComponent } from './main-app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
    //!------------New Stuff 1-----------------//

