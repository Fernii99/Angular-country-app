import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'single-country',
  templateUrl: './single-country.component.html',
  styles: [`
  img{width: 35px;
  }`]
})
export class SingleCountryComponent  {


  @Input()
  public country: Country[] = [];


}
