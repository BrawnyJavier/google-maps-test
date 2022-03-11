/// <reference types="@types/google.maps" />
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocationServiceService } from '../location/location-service.service';
@Injectable({
  providedIn: 'root',
})
export class PlacesServiceService {
  constructor(private locationService: LocationServiceService) {
    this.locationService.locationListener.subscribe((location) => {
      this.location = location;
    });
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement
    );
  }
  location: GeolocationPosition | null = null;

  map: google.maps.Map | null = null;

  placesListener: Subject<google.maps.places.PlaceResult[]> = new Subject<
    google.maps.places.PlaceResult[]
  >();

  loadingListener: Subject<boolean> = new Subject<boolean>();

  public FetchPlaces(
    keyword: string,
    callback: (results: google.maps.places.PlaceResult[]) => void
  ) {
    if (this.location && google && this.map) {
      const service = new google.maps.places.PlacesService(this.map);
      this.loadingListener.next(true);
      service.nearbySearch(
        {
          location: {
            lat: this.location.coords.latitude,
            lng: this.location.coords.longitude,
          },
          radius: 1133500,
          keyword: keyword,
        },
        (result) => {
          this.placesListener.next(result || []);
          this.loadingListener.next(false);
          callback(result || []);
        }
      );
    }
  }
}
