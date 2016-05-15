import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Welcome} from './components/welcome/welcome';
import {AddWorkout} from './components/add-workout/add-workout';
import {WorkoutWall} from './components/workout-wall/workout-wall';

import {SignIn} from './components/sign-in/sign-in';
import {SignOut} from './components/sign-out/sign-out';
import {AuthService} from './common/services/auth.service';
import {UserInfo} from './components/user-info/user-info';
import {WorkoutService} from './components/workout/workout.service';
import {PrivateComponent} from "./components/private/private.component";

@Component({
  selector: 'gymbo-app',
  providers: [AuthService, WorkoutService],
  pipes: [],
  directives: [ROUTER_DIRECTIVES, SignIn, SignOut, UserInfo],
  templateUrl: 'app/gymbo-app.html',
  styleUrls: ['app/gymbo-app.css']
})
@RouteConfig([
  { path: '/welcome',     component: Welcome,          name: 'Welcome', useAsDefault: true },
  { path: '/...'         ,component: PrivateComponent, name: 'Private' }
])
export class GymboApp {

  constructor(
    private auth: AuthService,
    private workoutService: WorkoutService,
    private router: Router
  ) {
    console.clear();
  }

  signOut(): void {
    console.log('Signing out');
    this.auth.signOut();
    this.router.navigate(['/Welcome']);
  }

  signInWithGithub(): void {
    console.info('signInWithGithub() start!');
    this.auth.signInWithGithub()
      .then((data) => {
        console.info('signInWithGithub() successful!');
      });
  }

  deleteWorkout(): void {
    console.log('deleteWorkout()');
  }
}
