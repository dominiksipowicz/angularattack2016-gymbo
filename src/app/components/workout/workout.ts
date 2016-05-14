/**
 * Created by Marian on 14/05/2016.
 */
export interface IWorkout {
  $key?:string;
  completed:boolean;
  createdAt:number;
  content:string;
}

export class Workout implements IWorkout {
  completed:boolean = false;
  createdAt:number = Firebase.ServerValue.TIMESTAMP;
  content:string;

  constructor(content:string) {
    this.content = content;
  }
}
