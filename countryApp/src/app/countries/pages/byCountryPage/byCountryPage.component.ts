import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountricesService } from '../../services/countries.service';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html',
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public initialValue: string = '';


  constructor( private CountriesService: CountricesService ) {}
  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCountries.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountries.term;

  }

  searchByCountry( term: string ):void  {
    this.CountriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      });

    }
}
