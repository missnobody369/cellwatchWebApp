import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TechniciansService } from "../services/technicians.service";
import { TaskService } from "../services/task.service";
import { AngularFireDatabase } from "angularfire2/database";
import { TechNamesService } from "../services/tech-names.service";

@Component({
  selector: "app-technicians-tasks",
  templateUrl: "./technicians-tasks.component.html",
  styleUrls: ["./technicians-tasks.component.css"]
})
export class TechniciansTasksComponent implements OnInit {
  technicians = {};
  tasks = {};

  id;
  taskId;

  constructor(
    private db: AngularFireDatabase,
    private techniciansService: TechniciansService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute) {
    //get data from database view 1x1 using id: technicians
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) this.techniciansService.getTechInfo(this.id).take(1).subscribe(t => (this.technicians = t));

    // console.log('MTK - technician ID:  ' + this.id);
    // console.log('MTK - task ID:  ' + this.taskId);
    // this.taskId = this.route.snapshot.paramMap.get('id');
    // console.log('MTK2 - task ID:   ' + this.taskId);
    // if (this.taskId) this.taskService.getTaskInfo(this.taskId).take(1).subscribe( b => this.tasks = b);
    // console.log(this.taskId);

    let taskId = this.route.snapshot.paramMap.get("id");
    if (taskId) this.taskService.getTaskInfo(taskId).take(1);
    console.log("MTK1 - task Key:   " + taskId);
    
    // if (this.taskId) this.taskService.getTaskInfo(this.taskId);
    // console.log("MTK3 - task ID:   " + taskId);
  }

  ngOnInit() {}
}
