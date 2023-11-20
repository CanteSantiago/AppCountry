import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountricesService } from '../../services/countries.service';

@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html',
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private CountriesService: CountricesService ) {}

  searchByRegion( region: string ):void  {
    this.CountriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });

    }
}
