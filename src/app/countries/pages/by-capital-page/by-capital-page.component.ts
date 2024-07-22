import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor (private countriesService: CountriesService) { }

  @Output()
  private SearchBoxValue = new EventEmitter<String>()

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
    }



  searchByCapital = (value: string):void => {

    this.isLoading = true;

    this.countriesService.searchCapital(value)
      .subscribe( countries => {
        this.countries = countries
      } );

      this.isLoading = false

  }

}
