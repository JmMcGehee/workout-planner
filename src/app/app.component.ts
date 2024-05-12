import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

const MODULES = [
  CommonModule,
  RouterOutlet,
  LoginComponent, 
  DashboardComponent,
  NavComponent
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MODULES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workout-planner';
}
