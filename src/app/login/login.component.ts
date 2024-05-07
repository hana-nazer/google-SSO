declare var google: any;

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() loggedInUser: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    // Initializing Google Sign-In
    google.accounts.id.initialize({
      client_id:
        '1075392148613-057hufqbcspdkic9kqes9ihe64uunv89.apps.googleusercontent.com',
      callback: (resp: any) => {
        // Calling the handleLogin function when authentication is successful
        this.handleLogin(resp);
      },
    });

    // Rendering the Google Sign-In button
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  // Decodes the JWT token received from Google
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  // Handles the login response
  handleLogin(response: any) {
    if (response) {
      // Decoding the token and emitting the logged-in user's payload
      const payload = this.decodeToken(response.credential);
      this.loggedInUser.emit(payload);
    }
  }

  // for signout - not using right now
  signOut(){
    google.accounts.id.disableAutoSelect();
  }
}
