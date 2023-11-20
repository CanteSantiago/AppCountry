import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountricesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html',
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;


  constructor( private CountriesService: CountricesService ) {}
  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;

  }

  searchByRegion( region: Region ):void  {

    this.selectedRegion = region;


    this.CountriesService.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });

    }
}
