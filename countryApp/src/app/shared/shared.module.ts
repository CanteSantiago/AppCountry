import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';

@NgModule({
  declarations: [
HomePageComponent,
AboutPageComponent,
SidebarComponent,
ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
HomePageComponent,
AboutPageComponent,
SidebarComponent,
ContactPageComponent

  ],

  providers: []
})
export class SharedModule { }
