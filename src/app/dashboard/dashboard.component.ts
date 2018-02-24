import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TechniciansService } from '../services/technicians.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  technicians$

  constructor(private db: AngularFireDatabase, 
    private techService: TechniciansService) { 
    
      this.technicians$ = this.techService.getAllInfo();
  }

  getAllInfo(){
    return this.db.list('/users/');
  }

  ngOnInit() {
  }

}
