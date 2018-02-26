import { Component, OnInit } from '@angular/core';
import { TechNamesService } from '../services/tech-names.service';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  //list of technames
  techNames$;

  //get data of technames
  constructor(
    private techNamesService: TechNamesService,
    private taskService: TaskService,
    private router: Router
  ) {

    this.techNames$ = techNamesService.getTechNames();

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
