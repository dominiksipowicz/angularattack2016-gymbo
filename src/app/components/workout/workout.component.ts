/**
 * Created by Marian on 14/05/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MdButton} from '@angular2-material/button';

@Component({
  selector: 'create-workout',
  directives: [MdButton],
  template: `
<button md-raised-button
        (click)="createWorkout.emit()">Create workout</button>
  `
})
export class WorkoutComponent {
  @Output() createWorkout: EventEmitter<any> = new EventEmitter(false);
}
