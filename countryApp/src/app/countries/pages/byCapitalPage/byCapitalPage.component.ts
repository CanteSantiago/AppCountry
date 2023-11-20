import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountricesService } from '../../services/countries.service';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html',
})

export class ByCapitalPageComponent  implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private CountriesService: CountricesService ) {}
  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCapital.countries;
  this.initialValue= this.CountriesService.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ):void  {


    this.isLoading = true;

    this.CountriesService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;

        this.isLoading = false;
      });

    }
  }
