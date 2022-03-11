import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../services/location/location-service.service';
import { PlacesServiceService } from '../services/places/places-service.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  constructor(
    private placesServiceService: PlacesServiceService,
    private locationService: LocationServiceService
  ) {
    this.placesServiceService.loadingListener.subscribe((arePlacesLoading) => {
      this.loading = arePlacesLoading;
    });
    this.locationService.locationListener.subscribe((loc) => {
      this.location = loc;
    });
  }
  location: GeolocationPosition | null = null;
  public loading: boolean = false;

  placesList: google.maps.places.PlaceResult[] = [];
  public searchQuery: string = '';
  public search() {
    this.placesServiceService.FetchPlaces(this.searchQuery, (results) => {
      this.placesList = results;
    });
  }
  ngOnInit() {}
}
