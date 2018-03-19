import { Component, OnInit } from '@angular/core';
import { TaskTypeService } from '../services/task-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  type = {};
  id;
  

  constructor(
    private taskTypeService: TaskTypeService,
    private router: Router,
    private route: ActivatedRoute) { 

      let id = this.route.snapshot.paramMap.get('id');
      if (id) this.taskTypeService.getAllTask(id).take(1).subscribe(y => this.type = y);
      console.log('MAE' + id);

    }

  saveType(type){
    this.taskTypeService.create(type);
    this.router.navigate(['/types']);
  }

  ngOnInit() {
  }

}
