import { Component, OnInit } from '@angular/core';
import { TaskTypeService } from '../services/task-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {
  
  typeCategory = {};
  id;

  taskCategory$;

  constructor(
    private taskTypeService: TaskTypeService,
    private router: Router,
    private route: ActivatedRoute) {

      this.taskCategory$ = this.taskTypeService.getTaskTypes();

      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.taskTypeService.getAllTask(this.id).take(1).subscribe(p => this.typeCategory = p);
    }

    saveType(type) {
      if(this.id) this.taskTypeService.updateType(this.id, type);
      else this.taskTypeService.create(type);      
      this.router.navigate(['/types']);
    }

    deleteType() {
      if (!confirm('Are you sure you want to delete this task type?')) return; 
        this.taskTypeService.deleteTaskType(this.id);
        this.router.navigate(['/types']);
      
    }

  ngOnInit() {
  }

}
