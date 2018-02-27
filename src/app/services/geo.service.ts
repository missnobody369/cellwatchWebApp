import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class GeoService {

  dbRef: any;
  constructor(private db: AngularFireDatabase) {
   }
      //JB 20-02-2018 Reference geofire database location
      
   getLocations() {
    return this.db.list('/location');
   }

  }
