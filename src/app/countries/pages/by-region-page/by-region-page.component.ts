import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';
import { CacheStore } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[]  = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor (private countriesService: CountriesService) { }


  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
    this.countries = this.countriesService.cacheStore.byRegion.countries
  }

  searchCountry = (countryName: Region) =>{

    this.selectedRegion = countryName;

    this.countriesService.searchRegion(countryName).subscribe(
      country => {
        this.countries = country;
      }
    );

  }

}
