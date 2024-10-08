import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'}, //!Sends it to default page on Load  
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', loadChildren: () => import('./app-home/app-home.module').then(m => m.AppHomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
