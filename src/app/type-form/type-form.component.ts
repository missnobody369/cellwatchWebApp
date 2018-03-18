import { Component, OnInit } from '@angular/core';
import { TaskTypeService } from '../services/task-type.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  constructor(private taskTypeService: TaskTypeService) { }


  saveType(type){
    this.taskTypeService.create(type);
  }

  ngOnInit() {
  }

}
