import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlGroup }     from '@angular/common';
import { QuestionBase }     from './questions/question-base';
import {MdInput} from '@angular2-material/input';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';

@Component({
  selector:'df-question',
  templateUrl:'app/components/dynamic-form/dynamic-form-question.component.html',
  styleUrls:['app/components/dynamic-form/dynamic-form-question.component.css'],
  directives: [MdInput, MdRadioButton, MdRadioGroup],
  providers: [MdRadioDispatcher]
})
export class DynamicFormQuestionComponent {
  @Input() question:QuestionBase<any>;
  @Input() form:ControlGroup;
  @Output() changeTo:EventEmitter<any> = new EventEmitter();
  get isValid() { return this.form.controls[this.question.key].valid; }
}
