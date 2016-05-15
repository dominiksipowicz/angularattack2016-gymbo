import {Injectable} from '@angular/core';
import {WorkoutService} from "./workout.service";
import {FirebaseListObservable} from "angularfire2";
import {IWorkout} from "../workout/workout";

@Injectable()
export class WorkoutCounter {
  workoutCount:number;

  constructor(workoutService: WorkoutService) {

    workoutService.workoutItems$.subscribe(
        (currentStateItems) => {
          this.workoutCount = currentStateItems.length;
        }
    );

  }
}
