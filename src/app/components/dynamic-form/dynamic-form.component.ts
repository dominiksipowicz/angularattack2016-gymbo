import { Component, Input, OnInit, Output, EventEmitter }  from '@angular/core';
import { ControlGroup }              from '@angular/common';
import { QuestionBase }                 from './questions/question-base';
import { QuestionControlService }       from '../../common/services/question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import {MdButton} from '@angular2-material/button';

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
  constructor(private qcs: QuestionControlService) {  }
  ngOnInit(){
    this.form = this.qcs.toControlGroup(this.questions);
  }
  onSubmit() {
    this.createWorkout.emit(false);
    this.payLoad = JSON.stringify(this.form.value);
  }
}
