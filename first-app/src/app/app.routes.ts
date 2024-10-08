import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    //   {path:'',redirectTo:'/home',pathMatch:'full'}, //!Sends it to default page on Load  
    //   {path:'home',component:HomeComponent},
//   { path: '', component: HomeComponent }, //$#Loads Home page on Load
//    { path: 'about', component: AboutComponent }
// {path:'about/:id',component:AboutComponent}

//todo: Lazy Loading-start(Creates new chunk of data on every Load)
    {
        path:'',
       loadComponent:()=>import('./home/home.component').then((c)=>c.HomeComponent),
    },
    {path:'about/:id',
        loadComponent:()=>import('./components/about/about.component').then((c)=>c.AboutComponent),
    }
];
//todo: Lazy Loading-end