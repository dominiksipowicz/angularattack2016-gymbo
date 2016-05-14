import { QuestionBase } from './question-base';

export class SelectQuestion extends QuestionBase<string>{
  controlType = 'select';
  options:{key:string, value:string}[] = [];

  constructor(options:{} = {}){
    super(options);
    this.options = options['options'] || [];
  }
}
