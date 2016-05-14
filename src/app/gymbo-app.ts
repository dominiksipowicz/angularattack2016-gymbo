import {Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Welcome} from './components/welcome/welcome';
import {About} from './components/about/about';

@Component({
  selector: 'gymbo-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/gymbo-app.html',
})
@RouteConfig([
  { path: '/welcome',    component: Welcome,     name: 'Welcome', useAsDefault: true },
  { path: '/about',      component: About,       name: 'About' },
])
export class GymboApp {

  constructor() {}

}
