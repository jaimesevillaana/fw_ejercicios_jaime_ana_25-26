import { Component, input } from '@angular/core';
import { HousinglocationInfo } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  housingLocation = input.required<HousinglocationInfo>();
}
