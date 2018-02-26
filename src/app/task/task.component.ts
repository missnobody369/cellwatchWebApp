import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  id;
  tasks$;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.tasks$ = this.taskService.getAllTask();

  }
  
  ngOnInit() {
  }

}
