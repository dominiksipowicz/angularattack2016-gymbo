import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {AuthService} from '../../common/services/auth.service';
import {SignIn} from '../sign-in/sign-in';

@Component({
  selector: 'home',
  templateUrl: 'app/components/welcome/welcome.html',
  styleUrls: ['app/components/welcome/welcome.css'],
  providers: [AuthService],
  directives: [ROUTER_DIRECTIVES, SignIn],
  pipes: []
})
export class Welcome {

  constructor(private auth: AuthService) {}
  
  signInWithGithub(): void {
    console.info('signInWithGithub() start!');
    this.auth.signInWithGithub()
        .then((data) => {
          console.info('signInWithGithub() successful!');
        });
  }
}
