import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { ControlGroup }              from '@angular/common';
import { QuestionBase }                 from './questions/question-base';
import { QuestionControlService }       from '../../common/services/question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import {MdButton} from '@angular2-material/button';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {CHANGE_GROUP, ADD_NEW_WORKOUT} from '../../common/reducers/options.reducer';

@Component({
  selector:'dynamic-form',
  templateUrl:'app/components/dynamic-form/dynamic-form.component.html',
  styleUrls:['app/components/dynamic-form/dynamic-form.component.css'],
  directives: [DynamicFormQuestionComponent, MdButton],
  providers:  [QuestionControlService]
})
export class DynamicForm {
  @Input() questions: QuestionBase<any>[] = [];
  @Output() createWorkout: EventEmitter<any> = new EventEmitter(false);
  form: ControlGroup;
  payLoad = '';
  options: Observable<{}>;
  submitted = false;
  constructor(private qcs: QuestionControlService, public store: Store<[{}]>) {
    let options$ = store.select('options');
    options$.subscribe((value:QuestionBase<any>[]) => {
      this.form = this.qcs.toControlGroup(value);
    });
  }
  changeGroup(){
    this.store.dispatch({ type: CHANGE_GROUP });
  }
  ngOnInit(){
    // this.form = this.qcs.toControlGroup(this.questions);
  }
  changeMuscleGroups(muscleGroup:any) {
    if(
      muscleGroup === 'legs' ||
      muscleGroup === 'chest' ||
      muscleGroup === 'cardio' ||
      muscleGroup === 'shoulders' ||
      muscleGroup === 'core' ||
      muscleGroup === 'arms' ||
      muscleGroup === 'back'
    ) {
      this.payLoad = '';
      this.store.dispatch({ type: CHANGE_GROUP, payload: muscleGroup });
    }
  }
  onSubmit() {
    if(this.form.valid) {
      this.createWorkout.emit(this.form.value);
      this.payLoad = JSON.stringify(this.form.value);
      this.store.dispatch({ type: ADD_NEW_WORKOUT });
      this.submitted = false;
    } else {
      this.submitted = true;
    }
  }
}
