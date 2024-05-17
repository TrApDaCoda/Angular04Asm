import { Component } from '@angular/core';
import { SelectComponent } from './select-component/select-component.component';
import { DisplayComponent } from './display-component/display-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SelectComponent, DisplayComponent]
})
export class AppComponent {
  selectedDistrict: any;

  onDistrictSelected(district: any): void {
    this.selectedDistrict = district;
  }
}
