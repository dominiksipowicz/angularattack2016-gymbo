import {Reducer, Action} from '@ngrx/store';
import { TextboxQuestion }  from './textbox-question';
import { SelectQuestion } from "./select-question";

export const CHANGE_GROUP = 'CHANGE_GROUP';
export const CHANGE_EXERCISE = 'CHANGE_EXERCISE';

export const options:Reducer<[{}]> = (state:[{}], action:Action) => {
  // console.log(state);
  switch (action.type) {
    case CHANGE_GROUP:
      return state;

    case CHANGE_EXERCISE:
      return state;

    default:
      return state;
  }
};
