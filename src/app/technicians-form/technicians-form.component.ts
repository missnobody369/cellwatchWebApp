import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TechniciansService } from '../services/technicians.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-technicians-form',
  templateUrl: './technicians-form.component.html',
  styleUrls: ['./technicians-form.component.css']
})
export class TechniciansFormComponent{
  // newTech$;
  technicians={};
  id;
  techId;

  constructor(
    private db: AngularFireDatabase,
    private techniciansService: TechniciansService,
    private router: Router,
    private route: ActivatedRoute,
    private af: AngularFireAuth) {

      //get data from database view 1x1 using id
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.techniciansService.getTechInfo(this.id).take(1).subscribe(t => this.technicians = t);

      this.techId=this.af.auth.currentUser.uid;
      
    }

   

  save(technicians){
    //updates the product
    if 
    (this.techId.uid) this.techniciansService.update( this.techId, technicians);
    else 
    this.techniciansService.create(this.techId,technicians);
    this.router.navigate(['/technicians']);
  }

  //deleting technicians in the firebase
  delete(){
    
    if (!confirm('Are you really sure you want to delete this technician?')) return;

    this.techniciansService.delete(this.techId);
    this.router.navigate(['/technicians']);
    }
  
  // createUser(technicians){
     
  //   this.newTech$ = this.techniciansService.createUser(this.technicians);
  // }


}
