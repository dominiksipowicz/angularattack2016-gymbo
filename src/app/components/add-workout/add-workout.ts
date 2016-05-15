import {Component} from '@angular/core';
import { DynamicForm } from '../dynamic-form/dynamic-form.component';
import { TextboxQuestion }  from '../dynamic-form/questions/textbox-question';
import { SelectQuestion } from "../dynamic-form/questions/select-question";
import {WorkoutService} from '../workout/workout.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';
import {CHANGE_GROUP} from '../../common/reducers/options.reducer';
import {AuthService} from "../../common/services/auth.service";

@Component({
  selector: 'about',
  templateUrl: 'app/components/add-workout/add-workout.html',
  styleUrls: ['app/components/add-workout/add-workout.css'],
  providers: [WorkoutService],
  directives: [DynamicForm],
  pipes: []
})
export class AddWorkout {
  workoutData:[{}];
  questions:[{}];
  // options: Observable<[{}]>;
  options: any;

  constructor(
    private workoutService: WorkoutService,
    private auth: AuthService,
    public store: Store<[{}]>
  ) {
    let options$ = store.select('options');
    options$.subscribe((value) => { this.options = value; });
  }

  createWorkout(content): void {
    // let workoutContent = 'createWorkout() at: ' + Date.now();
    let user = {
      uid: this.auth.id,
      avatar: this.auth.avatar,
      displayName: this.auth.displayName
    };
    this.workoutService.createWorkout(content, user);
  }

  ngOnInit() {

  }
}
