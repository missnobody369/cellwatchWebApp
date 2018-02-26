import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TechNamesService {

  constructor(private db: AngularFireDatabase) { }

  //getting all technicians name
  getTechNames(){
    //sort name of technicians
    return this.db.list('/users', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}
