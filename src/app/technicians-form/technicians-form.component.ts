import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TechniciansService } from '../services/technicians.service';


@Component({
  selector: 'app-technicians-form',
  templateUrl: './technicians-form.component.html',
  styleUrls: ['./technicians-form.component.css']
})
export class TechniciansFormComponent{

  technicians={};
  id;

  constructor(
    private db: AngularFireDatabase,
    private techniciansService: TechniciansService,
    private router: Router,
    private route: ActivatedRoute) {

      //get data from database view 1x1 using id
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.techniciansService.getTechInfo(this.id).take(1).subscribe(t => this.technicians = t);

    }

  save(technicians){
    //console.log(technicians);
    //updates the product
    if (this.id) this.techniciansService.update(this.id, technicians);
    //save function when technician is created to firebase
    else this.techniciansService.create(technicians);

    this.router.navigate(['/technicians']);
  }

  //deleting technicians in the firebase
  delete(){
    
    if (!confirm('Are you really sure you want to delete this technician?')) return;

    this.techniciansService.delete(this.id);
    this.router.navigate(['/technicians']);
    }
  
  // createAuth(){
  //   this.newTech$ = this.techniciansService.createUser(this.technicians);
  // }


}
