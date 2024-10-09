// import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,
    // NgIf
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  model:any={};
  cover!:string;
  cover_file:any;
  
  
  
  onFileSelected(event:any){
      const file=event.target.files[0];
      if(file){
          this.cover_file=file;
          const reader=new FileReader();
          console.log(reader)
          reader.onload=()=>{
            const dataUrl=reader.result!.toString();
            this.cover=dataUrl;
            console.log('image:',this.cover);
    
          }
          reader.readAsDataURL(file);
      }
 
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      console.log('form invalid');  
      form.control.markAllAsTouched();
      return;
    }
    console.log(form.value);
  }
}
