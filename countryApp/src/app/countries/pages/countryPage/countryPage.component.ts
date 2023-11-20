import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountricesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService:CountricesService,
    ) {}

  ngOnInit(): void {
  this.activatedRoute.params
  .subscribe(({id})=>{

    this.countriesService.searchCountryByAlphaCode(id)
    .subscribe(country => {
      console.log({country})
    })
  });
  }


}
