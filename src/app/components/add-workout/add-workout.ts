import {Component} from '@angular/core';
import { DynamicForm } from '../dynamic-form/dynamic-form.component';
import { TextboxQuestion }  from '../dynamic-form/questions/textbox-question';

@Component({
  selector: 'about',
  templateUrl: 'app/components/add-workout/add-workout.html',
  styleUrls: ['app/components/add-workout/add-workout.css'],
  providers: [],
  directives: [DynamicForm],
  pipes: []
})
export class AddWorkout {
  questions:any[];

  constructor() {
    this.questions = [
      new TextboxQuestion({
        key:'sets',
        label:'Number of sets:',
        type: 'number',
        value:'6',
        required: true,
        order: 1
      }),
      new TextboxQuestion({
        key:'reps',
        label:'Number of reps:',
        type: 'number',
        required: true,
        order: 2
      })
    ]
  }

  ngOnInit() {

  }
}
