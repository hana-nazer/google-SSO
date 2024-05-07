import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google-SSO';
  userPayload :any;
  // This function is called when a user logs in successfully and it is emitted from the child login component
  onLoggedInUser(payload: any) {
     // Logging the user's name and email
     this.userPayload = payload
  }
}
