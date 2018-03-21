import { Component, OnInit } from '@angular/core';
import { TechNamesService } from '../services/tech-names.service';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskTypeService } from '../services/task-type.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  //list of technames
  techNames$;
  //list of types
  taskTypes$;
  //list of status
  taskStatus$;
  //list of tasks
  tasks={};
  taskId;

  //dropdown technicians name
  eachUserID: string = '';
  selectedChangeHandler (event: any) {
    this.eachUserID = event.target.value;
  }

  //get data of technames
  constructor(
    private techNamesService: TechNamesService,
    private taskService: TaskService,
    private taskTypeService: TaskTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //dropdown list technicians name
    this.techNames$ = techNamesService.getTechNames();

    //dropdown list task types
    this.taskTypes$ = taskTypeService.getTaskTypes();

    this.taskStatus$ = taskTypeService.getTaskStatus();

   
    //get task details and insert inside form&card
    let taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) this.taskService.getTaskInfo(taskId).take(1).subscribe( b => this.tasks = b);

  }

  //add task information from task-form to db
  add(tasks){
    // console.log(tasks);
    //console.log(this.techNames$);
    this.taskService.create(tasks);
    this.router.navigate(['/task']);
  }

  ngOnInit() {
  }

}
