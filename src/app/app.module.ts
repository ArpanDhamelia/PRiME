import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MainCourseComponent } from './menu/main-course/main-course.component';
import { AppetizerComponent } from './menu/appetizer/appetizer.component';
import { BeveragesComponent } from './menu/beverages/beverages.component';
import { DessertComponent } from './menu/dessert/dessert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
    AboutComponent,
    RegisterComponent,
    MainCourseComponent,
    AppetizerComponent,
    BeveragesComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
