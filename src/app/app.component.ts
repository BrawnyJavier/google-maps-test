import { Component } from '@angular/core';
import { LocationServiceService } from './services/location/location-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blue-coding-test';
  constructor(private locationService: LocationServiceService) {
    this.locationService.fetchLocation();
  }
}
