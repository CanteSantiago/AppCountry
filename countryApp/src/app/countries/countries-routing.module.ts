import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/countryPage/countryPage.component';

const Routes:Routes=[
{
path:'by-capital',
component:ByCapitalPageComponent
},{
  path:'by-country',
  component:ByCountryPageComponent
  },{
    path:'by-region',
    component:ByRegionPageComponent
    },{
      path:'by/id',
      component:CountryPageComponent
      },
]

@NgModule({
  imports: [
    RouterModule.forChild(Routes)
  ],
  exports: [RouterModule],

})
export class CountriesRoutingModule { }
