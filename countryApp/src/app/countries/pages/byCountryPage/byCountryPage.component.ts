import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountricesService } from '../../services/countries.service';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html',
})
export class ByCountryPageComponent{

  public countries: Country[] = [];

  constructor( private CountriesService: CountricesService ) {}

  searchByCountry( term: string ):void  {
    this.CountriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      });

    }
}
