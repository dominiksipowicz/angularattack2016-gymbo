import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'workout-wall',
  templateUrl: 'app/components/workout-wall/workout-wall.html',
  styleUrls: ['app/components/workout-wall/workout-wall.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class WorkoutWall {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
