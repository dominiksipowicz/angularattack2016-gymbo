import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'home',
  templateUrl: 'app/components/welcome/welcome.html',
  styleUrls: ['app/components/welcome/welcome.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class Welcome {

  constructor() {}

  ngOnInit() {

  }

}
