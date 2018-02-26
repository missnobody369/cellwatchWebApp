//JB 22-02-2018 Added name and address info to the markers
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from './geo.service';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapsAPILoader: any;
  lat: number;
  lng: number;
  zoom: number;
  address: string;
  name: string;
  searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  markers$;
  subscription: any;

  constructor(
    private geo: GeoService, mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    
    this.lat = -36.8523902;
    this.lng = 174.6359334;
    this.zoom = 10;
    

    //create search FormControl
    this.searchControl = new FormControl();

     //set current position
     this.markers$ = this.geo.getLocations();

    //Autocomplete when loading the places
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["name"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

           //set latitude, longitude and zoom
           this.lat = place.geometry.location.lat();
           this.lng = place.geometry.location.lng();
           this.zoom = 12;
          }); 
        });  
      });
         
  }
  
}
