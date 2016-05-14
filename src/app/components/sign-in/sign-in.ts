/**
 * Created by Marian on 14/05/2016.
 */
import { Component } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {AuthService} from "../../common/services/auth.service";

@Component({
  selector: 'sign-in',
  directives: [MdButton],
  providers: [AuthService],
  template: `
<h1>Sign in</h1>
<button md-raised-button
        color="accent"
        (click)="signInWithGithub()"
        type="button">Github</button>
  `
})
export class SignIn {
  constructor(private auth: AuthService) {
    console.clear();
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then((data) => {
        console.info('signInWithGithub() successful');
      });
  }
}
