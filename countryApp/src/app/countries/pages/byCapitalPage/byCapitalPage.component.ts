import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountricesService } from '../../services/countries.service';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html',
})

export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private CountriesService: CountricesService ) {}

  searchByCapital( term: string ):void  {
    this.CountriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      });

    }
  }
