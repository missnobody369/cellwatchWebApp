import { Component, OnInit } from '@angular/core';
import { TechNamesService } from '../services/tech-names.service';
import { TaskService } from '../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  //list of technames
  techNames$;
  //list of tasks
  tasks={};
  taskId; 

  constructor(private techNamesService: TechNamesService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute) {


      this.techNames$ = techNamesService.getTechNames();

      //get task details and insert inside form&card
      let taskId = this.route.snapshot.paramMap.get('id');
      if (taskId) this.taskService.getTaskInfo(taskId).take(1).subscribe( b => this.tasks = b);
  
      //console.log('M - task ID:   ' + taskId);
    }
  
    //add task information from task-form to db
    add(tasks){
      // console.log(tasks);
      //console.log(this.techNames$);
      this.taskService.create(tasks);
      this.router.navigate(['/task-detail']);
    
     }

  ngOnInit() {
  }

}
