import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [RouterModule],  //!Have to provide RouterModule for router-link to work,
  imports: [RouterLink],  //!Works Directly

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    val:number=2;
  // private router=inject(Router); //#More preferably used now a days
  constructor(
    // private router:Router   //!Works Directly with inject function too
  ){

  }
  // navigate(){
  //     this.router.navigate(['/about'])
  // }
}
