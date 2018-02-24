import { Component, OnInit } from '@angular/core';
import { TechNamesService } from '../services/tech-names.service';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  //list of technames
  techNames$;
  //list of tasks
  tasks = {};
  taskId;

  //get data of technames
  constructor(
    private techNamesService: TechNamesService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.techNames$ = techNamesService.getTechNames();

    //get task details and insert inside form&card
    let taskId = this.route.snapshot.paramMap.get('id');
    console.log('  task-form.components:   ' + taskId);
    
    if (taskId) this.taskService.getTaskInfo(taskId).take(1).subscribe( b => this.tasks = b);
    //console.log('  task-form.components - eachUserID:   ' + this.tasks);
    //console.log('MTK2 - task ID:   ' + taskId);
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
