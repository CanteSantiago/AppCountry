import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';

@NgModule({
  declarations: [
HomePageComponent,
AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
HomePageComponent,
AboutPageComponent

  ],

  providers: []
})
export class SharedModule { }
