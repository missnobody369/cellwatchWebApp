import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TaskTypeService {

  constructor(private db: AngularFireDatabase) { }

  create(type){
       return this.db.list('/taskType/').push(type);
      // return this.db.database.ref('taskType').push().child("type").set(type);
  }

  //view each type in a table
  getTaskTypes(){
    return this.db.list('/taskType');
  }

  //get task 1 x 1
  getAllTask(typeId){
    return this.db.object('/taskType/' + typeId);
  }

  //update the task type
  updateType(typeId, type) {
    return this.db.object('/taskType/' +typeId).update(type);
  }

  //delete the task
  deleteTaskType(typeId) {
    return this.db.object('/taskType/' + typeId).remove();
  }

}
