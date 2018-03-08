
import { Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class TaskService {
  taskTemplates$;

  constructor(private db: AngularFireDatabase,private route: ActivatedRoute) {  }

  //creating new tasks and adding to db
  create(tasks){
    // return this.db.list('/users' + this.uid + '/tasks').push(tasks);
    return this.db.database.ref('/tasks/').push(tasks);
    //console.log(tasks.taskTechniciansName);
    // return this.db.list('/users/' + '/tasks').push(tasks);
    // return this.db.database.ref('/users/' + a.id  ).child("tasks").push(tasks);
  }

  getAllTask(){
    return this.db.list('/tasks', {
      query: {
        orderByChild: 'taskDate'
        
      }
    });

    //return this.db.database.ref('/users/').child("").child('/tasks/');
    //console.log();
  }

  getTaskById(userId){
    return this.db.list('/tasks', {
      query: {
        orderByChild: 'eachUserID',
        equalTo: userId
      }
    });
  }

  getTaskInfo(tasksId){
    return this.db.object('/tasks/' + tasksId);
    
  }
}
