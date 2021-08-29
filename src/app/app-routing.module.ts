import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppetizerComponent } from './menu/appetizer/appetizer.component';
import { BeveragesComponent } from './menu/beverages/beverages.component';
import { DessertComponent } from './menu/dessert/dessert.component';
import { MainCourseComponent } from './menu/main-course/main-course.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: CarouselComponent},
  {path: 'menu', component: MenuComponent,  children:
  [
    { path : '' , redirectTo:  'appetizers' , pathMatch:  'full'},
  { path:'main-course' ,component: MainCourseComponent },
  { path:'appetizers' ,component: AppetizerComponent },
  { path:'beverages' ,component: BeveragesComponent },
  { path:'desserts' ,component: DessertComponent }]},
  {path: 'about' , component: AboutComponent},
  {path: 'reserve', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
