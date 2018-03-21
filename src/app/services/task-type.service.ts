import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TaskTypeService {

  constructor(private db: AngularFireDatabase) { }

  //dropdown list inside add task
  getTaskTypes(){
    return this.db.list('/taskType/');
  }



  //ADD TASK TYPES
  create(type){
    return this.db.list('/taskType/').push(type);
    //var a = this.db.database.ref('/taskType').push().set(type);
  }
  getTaskStatus(){
    return this.db.list('/taskStatus');
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

  getTypeById(typeId){
    return this.db.list('/taskType/', {
      query: {
        orderByChild: 'type',
        equalTo: typeId
      }
    });
  }

}
