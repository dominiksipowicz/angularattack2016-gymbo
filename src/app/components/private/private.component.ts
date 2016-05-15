/**
 * Created by Marian on 15/05/2016.
 */
import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {AuthService} from '../../common/services/auth.service';
import resolve = Promise.resolve;
import {SecretComponent} from "../secret/secret.component";
import {WorkoutWall} from "../workout-wall/workout-wall";
import {AddWorkout} from "../add-workout/add-workout";

@Component({
  selector: 'private',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <router-outlet *ngIf="authenticated"></router-outlet>
  `
})
@RouteConfig([
  {
    path: '/secret',
    component: SecretComponent,
    name: 'Secret'
  },
  { path: '/add-workout', component: AddWorkout,       name: 'Add Workout' },
])
export class PrivateComponent {
  authenticated: boolean = false;
  constructor(private auth: AuthService, private router: Router) {
  }

  routerOnActivate() {
    console.log(this.auth.authenticated);
    return new Promise((resolve) => {
      this.auth
        .check()
        .subscribe((result) => {
          if (!result) {
            console.log(`What's going on? Go to login dude!`);
            this.router.navigate(['/Welcome']);
          } else {
            console.log(`Finally, you've made it!`);
            this.authenticated = true;
          }

          resolve();
        });
    });
  }
}
