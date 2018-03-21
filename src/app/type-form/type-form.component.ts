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

  constructor(
    private taskTypeService: TaskTypeService,
    private router: Router,
    private route: ActivatedRoute) {

     this.id = this.route.snapshot.paramMap.get('id');
     if (this.id) this.taskTypeService.getAllTask(this.id).take(1).subscribe(m => this.typeCategory = m);

     console.log(this.id);
    }

    saveType(type) {
      if (this.id) this.taskTypeService.updateType(this.id, type);
      else this.taskTypeService.create(type);      
      this.router.navigate(['/types']);

      console.log(this.id);
    }

    deleteType() {
      if (!confirm('Are you sure you want to delete this task type?')) return; 
        this.taskTypeService.deleteTaskType(this.id);
        this.router.navigate(['/types']);
        console.log(this.id);
    }

  ngOnInit() {
  }

}
