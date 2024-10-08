import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,  //!Used for Lazy Loading
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    private route=inject(ActivatedRoute);
    
    ngOnInit(){
      const id=this.route.snapshot.paramMap.get('id');  //$Fetches the ID from the route :id (Has to be same Name)
      console.log(id)

      this.route.params.subscribe({
        next:(data)=>{
          console.log(data['id'])

        },
          error:(e=>{
            console.log(e)
          })
      })
    }
}