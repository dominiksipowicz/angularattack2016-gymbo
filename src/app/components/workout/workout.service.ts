/**
 * Created by Marian on 14/05/2016.
 */
import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {IWorkout, Workout} from "./workout";

@Injectable()
export class WorkoutService {
  workoutItems$:FirebaseListObservable<IWorkout[]>;

  constructor(af:AngularFire) {
    this.workoutItems$ = af.list('/workouts') as FirebaseListObservable < IWorkout[] >;
  }

  createWorkout(content: string): Promise<any> {
    return this.workoutItems$.push(new Workout(content));
  }

  removeWorkout(workout: IWorkout): Promise<any> {
    return this.workoutItems$.remove(workout.$key);
  }

  updateWorkout(workout: IWorkout, changes: any): Promise<any> {
    return this.workoutItems$.update(workout.$key, changes);
  }
}
