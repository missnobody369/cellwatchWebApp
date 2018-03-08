import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TechniciansService } from '../services/technicians.service';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild('search') public searchElement: ElementRef;

  technicians$

  constructor(private db: AngularFireDatabase, 
    private techService: TechniciansService,
    private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone) { 
    
      this.technicians$ = this.techService.getAllInfo();
  }

  getAllInfo(){
    return this.db.list('/users/');
  }

  ngOnInit() {
    
    // this.mapsAPILoader.load().then(
    //   () => {
    //     let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,
    //     { types: ["address"]});

    //     autocomplete.addListener("places_changed", () => {
    //       this.ngZone.run(() => {
    //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //         if(place.geometry === undefined || place.geometry === null) {
    //           return;
    //         }
    //       });
    //     });
    //   }
    // );
  }

  //maps
  latitude = -36.852399;
  longitude = 174.635958;
  locationChoosen = false;
  

  onChoosenLocation(event) {
    //console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChoosen = true;
  }


}
