import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Technicians } from '../models/technicians';
import { TechniciansService } from '../services/technicians.service';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit, OnDestroy{

  // technicians: {name: string}[];
  technicians: Technicians[];
  filteredTechnicians: any[];
  subscription: Subscription;

  //querying filter for technicians name: search
  constructor(private techService: TechniciansService) { 
    this.subscription = this.techService.getAllInfo()
    .subscribe (technicians => this.filteredTechnicians = this.technicians = technicians);
  }

  //filter technicians name for search
  filter(query: string){
    // console.log(query);
    this.filteredTechnicians = (query) ?
      this.technicians.filter(t => t.name.toLowerCase().includes(query.toLowerCase())) : 
      this.technicians;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  ngOnInit(){

  }
  
}
