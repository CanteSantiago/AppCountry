import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
HomePageComponent,
AboutPageComponent,
SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
HomePageComponent,
AboutPageComponent,
SidebarComponent

  ],

  providers: []
})
export class SharedModule { }
