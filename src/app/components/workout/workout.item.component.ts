/**
 * Created by Marian on 14/05/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IWorkout} from "./workout";

@Component({
  selector: 'workout-item',
  template: `
<div>Content: {{ workoutItem.content }}</div>
<div>Key: {{ workoutItem.$key }}</div>
<button (click)="deleteWorkout.emit(workoutItem)">Delete</button>
<br>
  `
})
export class WorkoutItemComponent {
  @Input() workoutItem: IWorkout;
  @Output() deleteWorkout: EventEmitter<any> = new EventEmitter(false);
}
