import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(public auth:AuthService) { }

  signInWithGoogle = (): void => {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
  };

  signInWithFacebook = (): void => {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  };

  signOut = (): void => {
    this.auth.signOut();
  };


  ngOnInit() {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });   
  }

}
