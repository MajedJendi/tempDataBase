import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service'

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, OnDestroy {

  lat: number;
  lng: number;

  markers: any;
  subscription: any;

  constructor(private geo: GeoService) { }
	
/*	private seedDatabase() {
	  let dummyPoints = [
	    [37.9, -122.1],
	    [38.7, -122.2],
	    [38.1, -122.3],
	    [38.3, -122.0],
	    [38.7, -122.1]
	  ]
	
	  dummyPoints.forEach((val, idx) => {
	    let name = `dummy-location-${idx}`
	    console.log(idx)
	    this.geo.setLocation(name, val)
	  })
	}*/
	
  ngOnInit() {
    this.getUserLocation()
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;


       this.geo.getLocations(100, [this.lat, this.lng])
     });
   }
 }
}