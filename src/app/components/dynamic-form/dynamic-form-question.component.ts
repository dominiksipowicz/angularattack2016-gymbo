import { Component, Input } from '@angular/core';
import { ControlGroup }     from '@angular/common';
import { QuestionBase }     from './questions/question-base';
import {MdInput} from '@angular2-material/input';

@Component({
  selector:'df-question',
  templateUrl:'app/components/dynamic-form/dynamic-form-question.component.html',
  directives: [MdInput]
})
export class DynamicFormQuestionComponent {
  @Input() question:QuestionBase<any>;
  @Input() form:ControlGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
