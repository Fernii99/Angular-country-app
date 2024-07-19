import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [`
  img{
    width: 35px
  }`]
})
export class ByCountryPageComponent {

  public country: Country[] = [];

  constructor (private countriesService: CountriesService) { }

  searchCountry = (countryName: string) =>{

    this.countriesService.searchCountry(countryName).subscribe(
      country => {
        this.country = country;
      }
    );

  }

}
