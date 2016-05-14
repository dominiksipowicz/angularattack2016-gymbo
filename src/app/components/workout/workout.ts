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

/*
ob =
{
  "date": "02/02/2016",
  "userId": "dominik",
  "type": "chest", // ENUM
  "exercises": [
    {
      "subtype": "barbell bench press", //ENUM
      "sets": [
        {
          "weight": 50, "reps": 8, "withHelp": false
        },
        {
          "weight": 55, "reps": 6, "withHelp": false
        },
        {
          "weight": 60, "reps": 7, "withHelp": true
        }
      ]
    },
    {
      "subtype": "flat bench dumbbell press", //ENUM
      "sets": [
        {
          "weight": 30, "reps": 8, "withHelp": false
        },
        {
          "weight": 30, "reps": 6, "withHelp": false
        },
        {
          "weight": 30, "reps": 7, "withHelp": false
        }
      ]
    }
  ],
  "summary": {
    "exercises": 2,
    "setsTotal": 6,
    "repsTotal": 30,
    "withHelp": true
  }
};
*/