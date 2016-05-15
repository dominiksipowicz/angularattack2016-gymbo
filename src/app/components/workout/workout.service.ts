/**
 * Created by Marian on 14/05/2016.
 */
import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {IWorkout, Workout} from "./workout";
import {AuthService} from "../../common/services/auth.service";

@Injectable()
export class WorkoutService {
  workoutItems$:FirebaseListObservable<IWorkout[]>;
  exerciseItems$:FirebaseListObservable<any[]>;

  constructor(af:AngularFire,
              private auth:AuthService) {
    this.workoutItems$ = af.list('/workouts') as FirebaseListObservable < IWorkout[] >;
    this.exerciseItems$ = af.list('/exercises') as FirebaseListObservable <any[]>;
  }

  createWorkout(content:string, user: any):Promise<any> {
    return this.workoutItems$.push(new Workout(content, user));
  }

  removeWorkout(workout:IWorkout):Promise<any> {
    return this.workoutItems$.remove(workout.$key);
  }

  updateWorkout(workout:IWorkout, changes:any):Promise<any> {
    return this.workoutItems$.update(workout.$key, changes);
  }
}
