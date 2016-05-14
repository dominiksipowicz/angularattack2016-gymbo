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

@Component({
  selector: 'gymbo-app',
  providers: [AuthService, WorkoutService],
  pipes: [],
  directives: [ROUTER_DIRECTIVES, SignIn, SignOut, UserInfo],
  templateUrl: 'app/gymbo-app.html',
  styles: [`
  .user-wrapper {
    display: flex;
    align-items: center;
  }
  `]
})
@RouteConfig([
  { path: '/welcome',     component: Welcome,     name: 'Welcome', useAsDefault: true },
  { path: '/add-workout', component: AddWorkout,  name: 'Add Workout' },
  { path: '/workout-wall',component: WorkoutWall, name: 'Workout Wall' }
])
export class GymboApp {

  constructor(
    private auth: AuthService,
    private workoutService: WorkoutService
  ) {
    console.clear();
  }

  signOut(): void {
    console.log('Signing out');
    this.auth.signOut();
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
