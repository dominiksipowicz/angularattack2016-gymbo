/**
 * Created by Marian on 14/05/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IWorkout} from "./workout";
import {MdCard} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";
import {AuthService} from "../../common/services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
@Component({
  selector: 'workout-item',
  directives: [MdButton, MdCard],
  providers: [AuthService],
  styles: [`
    md-card-title {
      padding: 15px;
    }
  `,
  ],
  template: `
    <md-card>

      <md-card-header>
          <img md-card-avatar [src]="workoutItem.user.avatar">
          <md-card-title>{{ workoutItem.user.displayName }}</md-card-title>
      </md-card-header>

      <md-card-content>
        <div><b>Exercise:</b> {{ workoutItem.content.exercises }}</div>
        <div><b>Muscle Group:</b> {{ workoutItem.content.muscleGroups }}</div>
        <div><b>Reps:</b> {{ workoutItem.content.reps }}</div>
        <div><b>Sets:</b> {{ workoutItem.content.sets }}</div>
        <div><b>Weight:</b> {{ workoutItem.content.weight }}</div>
        <div><b>Date:</b> {{ workoutItem.createdAt | date }}</div>
      </md-card-content>

      <md-card-actions layout="row" 
                       layout-align="end center"
                       *ngIf="workoutItem.user.uid === auth.id">
          <button md-raised-button 
                  color="warn" 
                  (click)="deleteWorkout.emit(workoutItem)">Delete</button>
      </md-card-actions>

    </md-card>

  `
})
export class WorkoutItemComponent {
  @Input() workoutItem: IWorkout;
  @Output() deleteWorkout: EventEmitter<any> = new EventEmitter(false);

  constructor(private auth:AuthService) {

  }
}
