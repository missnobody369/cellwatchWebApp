//JBAL 22-02-2018 Added name and address info to the markers
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../services/geo.service';
import { ElementRef, NgZone, NgModule, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  longitude: number;
  latitude: number;
  lat: number;
  lng: number;
  zoom: number;
  address: string;
  name: string;
  searchControl: FormControl;

  @ViewChild("search")
  searchElementRef: ElementRef;

  markers$;
  subscription: any;

  constructor(
    private geo: GeoService, 
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    
    //set google maps defaults
    this.lat = -36.8523902;
    this.lng = 174.6359334;
    this.zoom = 12;

    //FormControl creation
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

     //setting current position
     this.markers$ = this.geo.getLocations();

  
    // //Autocomplete when typing the name of the technician
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["name"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //getting the result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();


          //getting the result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

