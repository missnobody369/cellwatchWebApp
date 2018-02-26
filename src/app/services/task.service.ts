import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TaskService {


  constructor(private db: AngularFireDatabase) {  }

  //creating new tasks and adding to db
  create(tasks){
    // return this.db.list('/users' + this.uid + '/tasks').push(tasks);
    return this.db.database.ref('/tasks/').push(tasks);
    //console.log(tasks.taskTechniciansName);
    // return this.db.list('/users/' + '/tasks').push(tasks);
    // return this.db.database.ref('/users/' + a.id  ).child("tasks").push(tasks);
  }

  getAllTask(){
    return this.db.list('/tasks');
    //return this.db.database.ref('/users/').child("").child('/tasks/');
    //console.log();
  }

}
