import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Technicians } from '../models/technicians';

@Injectable()
export class TechniciansService {

  constructor(private db: AngularFireDatabase, private af: AngularFireAuth) { }

  //create technicians list and push inside child in firebase
  create(technicians){
    return this.db.list('/users').push(technicians);
  }

  //get/view all the data from database:table
  getAllInfo(){
    return this.db.list('/users/');
  }

  //get/view all the data from database:form&card
  getTechInfo(techniciansId){
    return this.db.object('/users/' + techniciansId);
  }

  //updating the technicians information
  update(techniciansId, technicians){
    return this.db.object('/users/' +techniciansId).update(technicians);
  }

  //delete technicians locate using id
  delete(techniciansId){
    return this.db.object('/users/' + techniciansId).remove();
  }

  // createUser (technicians){
  //  return this.af.auth.createUserWithEmailAndPassword(technicians.email, 
  //   technicians.password)
  //  .catch(function(error) {
  //     // Handle Errors here.
  //     console.log(technicians.email);
  //     console.log(technicians.password);

  //     var errorMessage = error.message;
  //     // ...
  //   });
  // }

  
}
