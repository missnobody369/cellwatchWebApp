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

  getAllTask(uid){
    const userQuery$=  this.db.list('/tasks/',{query:{
      orderByChild:'taskTechnicianName',
      equalTo:uid
    }});
    userQuery$.subscribe(tasks => console.log(tasks));
    //return this.db.database.ref('/users/').child("").child('/tasks/');
    //console.log();
  }
  //getting each task information
  
  getTaskInfo(uId){
  // console.log('M - task ID:   ' + tasksId);
    return this.db.object('/tasks/');
  }

}
