import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"userregister",component:UserregisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
