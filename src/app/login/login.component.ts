import { Component, inject } from '@angular/core';
// import { AuthGoogleService } from '../auth-google.service';
import {MatButtonModule} from '@angular/material/button';


const MODULES: any[] = [
 MatButtonModule
]

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MODULES],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // private authService = inject(AuthGoogleService)

  // signInWithGoogle() {
  //   this.authService.login();
  // }

  
}
