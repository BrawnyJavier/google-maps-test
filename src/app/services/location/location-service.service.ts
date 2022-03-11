import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationServiceService {
  constructor() {}

  locationListener: Subject<GeolocationPosition> =
    new Subject<GeolocationPosition>();

  locationChange(newLocation: GeolocationPosition) {
    this.locationListener.next(newLocation);
  }

  fetchLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.locationChange(pos);
      });
    }
  }
}
