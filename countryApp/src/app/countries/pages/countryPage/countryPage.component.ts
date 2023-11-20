import { Country } from './../../interfaces/country';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountricesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService:CountricesService,
    private router: Router
    ) {}

  ngOnInit(): void {
  this.activatedRoute.params
.pipe(
  switchMap( ({ id }) => this.countriesService.searchCountrByAlphaCode( id )),
)

  .subscribe(Country=>{
    if ( !Country ) {
      return this.router.navigateByUrl('');
    }
    console.log('Tenemos un pais');
    return;
  });
  }



}
