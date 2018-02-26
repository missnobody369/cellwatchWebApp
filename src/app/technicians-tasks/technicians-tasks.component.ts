import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TechniciansService } from "../services/technicians.service";
import { TaskService } from "../services/task.service";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { TechNamesService } from "../services/tech-names.service";
import { PromiseObservable } from "rxjs/observable/PromiseObservable";

@Component({
  selector: "app-technicians-tasks",
  templateUrl: "./technicians-tasks.component.html",
  styleUrls: ["./technicians-tasks.component.css"]
})
export class TechniciansTasksComponent implements OnInit {
  technicians = {};
  tasks = {};
  tasks$;
  filteredTasks: any[];
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
      
   
    this.tasks$ = this.taskService.getTaskById(this.id);
    
  }

  ngOnInit() {}
}
