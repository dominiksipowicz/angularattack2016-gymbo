import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { ControlGroup }              from '@angular/common';
import { QuestionBase }                 from './questions/question-base';
import { QuestionControlService }       from '../../common/services/question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import {MdButton} from '@angular2-material/button';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {CHANGE_GROUP, CHANGE_EXERCISE} from '../../common/reducers/options.reducer';

@Component({
  selector:'dynamic-form',
  templateUrl:'app/components/dynamic-form/dynamic-form.component.html',
  directives: [DynamicFormQuestionComponent, MdButton],
  providers:  [QuestionControlService]
})
export class DynamicForm {
  @Input() questions: QuestionBase<any>[] = [];
  @Output() createWorkout: EventEmitter<any> = new EventEmitter(false);
  form: ControlGroup;
  payLoad = '';
  options: Observable<{}>;
  constructor(private qcs: QuestionControlService, public store: Store<[{}]>) {
    // this.options = store.select('options');
  }
  changeGroup(){
    this.store.dispatch({ type: CHANGE_GROUP });
  }
  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.questions);
  }
  onSubmit() {
    this.createWorkout.emit(this.form.value);
    this.payLoad = JSON.stringify(this.form.value);
  }
}
