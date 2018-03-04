import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Tasks } from '../models/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {
  id;
  tasks: Tasks[];
  filteredTasks: any[];
  subscription: Subscription;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    this.subscription = this.taskService.getAllTask()
    .subscribe(tasks => this.filteredTasks = this.tasks = tasks);
  }

  filter(queryTasks: string){
    // querying logic
    // console.log(queryTasks);
    this.filteredTasks =(queryTasks) ?
      // this.tasks.filter(s => s.taskTechicianName.toLowerCase().includes(queryTasks.toLowerCase())) : 
      // this.tasks;
      this.tasks.filter(s => s.taskName.toLowerCase().includes(queryTasks.toLowerCase())) : 
      this.tasks;
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  ngOnInit() {
  }

}
