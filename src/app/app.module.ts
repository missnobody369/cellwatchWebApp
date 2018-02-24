import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CellwatchNavbarComponent } from './cellwatch-navbar/cellwatch-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechniciansComponent } from './technicians/technicians.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { TechniciansFormComponent } from './technicians-form/technicians-form.component';
import { TechniciansService } from './services/technicians.service'
import { MapsComponent } from './maps/maps.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TechNamesService } from './services/tech-names.service';
import { TaskService } from './services/task.service';
import { TechniciansTasksComponent } from './technicians-tasks/technicians-tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    CellwatchNavbarComponent,
    DashboardComponent,
    TechniciansComponent,
    LoginComponent,
    TechniciansFormComponent,
    MapsComponent,
    TaskComponent,
    TaskFormComponent,
    TechniciansTasksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},

      { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuardService]
      },
      { path: 'technicians-tasks',
      component: TechniciansTasksComponent,
      canActivate: [AuthGuardService]
      },
      { path: 'technicians-tasks/:id',
      component: TechniciansTasksComponent,
      canActivate: [AuthGuardService]
      },

      // technicians tasks
      { path: 'task',
      component: TaskComponent,
      canActivate: [AuthGuardService]
      },
      { path: 'task/new',
      component: TaskFormComponent,
      canActivate: [AuthGuardService]
      },
      { path: 'task/:id',
      component: TaskFormComponent,
      canActivate: [AuthGuardService]
      },

      //technicians
      { path: 'technicians',
        component: TechniciansComponent,
        canActivate: [AuthGuardService]
      },
      { path: 'technicians/new',
        component: TechniciansFormComponent,
        canActivate: [AuthGuardService]
      },
      { path: 'technicians/:id',
        component: TechniciansFormComponent,
        canActivate: [AuthGuardService]
      },

      // { path: 'technicians/:id',
      //   component: TechniciansComponent,
      //   children: [
      //     {
      //     path: 'task/:id',
      //     component: TaskComponent
      //     }
      //   ]
      // }
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    TechniciansService,
    TechNamesService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
