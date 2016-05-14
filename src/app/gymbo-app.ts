import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Welcome} from './components/welcome/welcome';
import {AddWorkout} from './components/add-workout/add-workout';
import {WorkoutWall} from './components/workout-wall/workout-wall';

@Component({
  selector: 'gymbo-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/gymbo-app.html',
})
@RouteConfig([
  { path: '/welcome',    component: Welcome,     name: 'Welcome', useAsDefault: true },
  { path: '/add-workout',component: AddWorkout,  name: 'Add Workout' },
  { path: '/workout-wall',component: WorkoutWall,  name: 'Workout Wall' }
])
export class GymboApp {

  constructor() {}

}
