import {Component} from '@angular/core';
import { DynamicForm } from '../dynamic-form/dynamic-form.component';
import { TextboxQuestion }  from '../dynamic-form/questions/textbox-question';
import { SelectQuestion } from "../dynamic-form/questions/select-question";
import {WorkoutService} from '../workout/workout.service';

@Component({
  selector: 'about',
  templateUrl: 'app/components/add-workout/add-workout.html',
  styleUrls: ['app/components/add-workout/add-workout.css'],
  providers: [WorkoutService],
  directives: [DynamicForm],
  pipes: []
})
export class AddWorkout {
  questions:any[];

  constructor(private workoutService: WorkoutService) {
    this.questions = [
      new SelectQuestion({
        key:'muscle',
        label: 'Muscle Group',
        options: [
          {key:'back',  value:'Back'},
          {key:'chest',  value:'Chest'},
          {key:'arms',   value:'Arms'},
          {key:'legs',value:'Legs'}
        ],
        value: 'back',
        required: true,
        order: 1
      }),
      new SelectQuestion({
        key:'exercise',
        label: 'Exercise',
        options: [
          {key:'back',  value:'Back'},
          {key:'chest', value:'Chest'},
          {key:'arms',  value:'Arms'},
          {key:'legs',  value:'Legs'}
        ],
        value: 'legs',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key:'sets',
        label:'Number of sets:',
        type: 'number',
        value: 6,
        required: true,
        order: 3
      }),
      new TextboxQuestion({
        key:'reps',
        label:'Number of reps:',
        type: 'number',
        value: 4,
        required: true,
        order: 4
      })
    ]
  }

  createWorkout(): void {
    let workoutContent = 'createWorkout() at: ' + Date.now();
    this.workoutService.createWorkout(workoutContent);
  }

  ngOnInit() {

  }
}
