import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {WorkoutService} from "../workout/workout.service";
import {FirebaseListObservable} from "angularfire2";
import {IWorkout} from "../workout/workout";
import {WorkoutItemComponent} from "../workout/workout.item.component";

@Component({
  selector: 'workout-wall',
  templateUrl: 'app/components/workout-wall/workout-wall.html',
  styleUrls: ['app/components/workout-wall/workout-wall.css'],
  providers: [],
  directives: [WorkoutItemComponent],
  pipes: []
})
export class WorkoutWall {
  workoutItems$: FirebaseListObservable<IWorkout[]>;
  constructor(http: Http, private workoutService: WorkoutService) {
    this.workoutItems$ = workoutService.workoutItems$;
  }

  deleteWorkout(workout: IWorkout) {
    this.workoutService.removeWorkout(workout);
  }

  ngOnInit() {
  }
}
