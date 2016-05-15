import {Reducer, Action} from '@ngrx/store';
import { TextboxQuestion }  from './textbox-question';
import { SelectQuestion } from "./select-question";

export const CHANGE_GROUP = 'CHANGE_GROUP';
export const ADD_NEW_WORKOUT = 'ADD_NEW_WORKOUT';
export const LOAD_EXERCISES = 'LOAD_EXERCISES';

let exercises = [
  {
    key:'back',
    value:'Back',
    exercises: [
      {
        key: 'wide grip pull up',
        value: 'Wide Grip Pull Up'
      },
      {
        key: 'dead lift',
        value: 'Dead Lift'
      },
      {
        key: 'barbell deadlift',
        value: 'Barbell Deadlift'
      },
      {
        key: 'bent over barbell row',
        value: 'Bent Over Barbell Row'
      }
    ]
  },
  {
    key:'chest',
    value:'Chest',
    exercises: [
      {
        key: 'barbell bench press',
        value: 'Barbell Bench Press'
      },
      {
        key: 'flat bench dumbbell press',
        value: 'Flat Bench Dumbbell press'
      },
      {
        key: 'low incline barbell bench press',
        value: 'Low Incline Barbell Bench Press'
      },
      {
        key: 'incline dumbbell press',
        value: 'Incline Dumbbell press'
      }
    ]
  },
  {
    key:'arms',
    value:'Arms',
    exercises: [
      {
        key: 'standing dumbbell reverse curl',
        value: 'Standing Dumbbell Reverse Curl'
      },
      {
        key: 'hammer curls',
        value: 'Hammer Curls'
      },
      {
        key: 'ez-bar curl',
        value: 'EZ-Bar Curl'
      },
      {
        key: 'reverse grip triceps pushdown',
        value: 'Reverse Grip Triceps Pushdown'
      }
    ]
  },
  {
    key:'legs',
    value:'Legs',
    exercises: [
      {
        key: 'squat',
        value: 'Squat'
      },
      {
        key: 'front squat',
        value: 'Front Squat'
      },
      {
        key: 'olympic lifts',
        value: 'Olympic Lifts'
      },
      {
        key: 'bulgarian split squat',
        value: 'Bulgarian Split Squat'
      }
    ]
  },
  {
    key:'shoulders',
    value:'Shoulders',
    exercises: [
      {
        key: 'dumbbell shoulder press',
        value: 'Dumbbell Shoulder Press'
      },
      {
        key: 'upright row',
        value: 'Upright Row'
      },
      {
        key: 'lateral raise',
        value: 'Lateral Raise'
      },
      {
        key: 'front barbell raise',
        value: 'Front Barbell Raise'
      }
    ]
  },
  {
    key:'cardio',
    value:'Cardio',
    exercises: [
      {
        key: 'rowing',
        value: 'Rowing'
      },
      {
        key: 'cycling',
        value: 'Cycling'
      },
      {
        key: 'running',
        value: 'Running'
      },
      {
        key: 'swimming',
        value: 'Swimming'
      }
    ]
  },
  {
    key:'core',
    value:'Core',
    exercises: [
      {
        key: 'cable crunch',
        value: 'Cable Crunch'
      },
      {
        key: 'barbell side bend',
        value: 'Barbell Side Bend'
      },
      {
        key: 'crunches',
        value: 'Crunches'
      },
      {
        key: 'reverse crunch',
        value: 'Reverse Crunch'
      }
    ]
  }
];

export const options:Reducer<{}[]> = (state:[{}], {type, payload}) => {
  switch (type) {
    case LOAD_EXERCISES:


    case CHANGE_GROUP:

      let chosenMuscleGroup;

      exercises.filter(value => {
        return value.key === payload;
      }).map(value => chosenMuscleGroup = value);

      let exercisesSelect = new SelectQuestion({
        label: 'Exercises',
        controlType: 'select',
        key: 'exercises',
        required: true,
        options: chosenMuscleGroup.exercises
      });

      if(chosenMuscleGroup.key === 'cardio') {
        return [new SelectQuestion ({
          label: 'Muscle Groups',
          controlType: 'select',
          key: 'muscleGroups',
          required: true,
          value: payload,
          options: [
            {key:'back', value:'Back'},
            {key:'chest', value:'Chest'},
            {key:'arms', value:'Arms'},
            {key:'legs', value:'Legs'},
            {key:'shoulders', value:'Shoulders'},
            {key:'cardio', value:'Cardio'},
            {key:'core', value:'Core'}
          ]
        }), exercisesSelect, new TextboxQuestion({
          key:'minutes',
          label:'Number of minutes:',
          type: 'number',
          required: true,
          order: 3
        })];
      } else {
        return [new SelectQuestion ({
          label: 'Muscle Groups',
          controlType: 'select',
          key: 'muscleGroups',
          required: true,
          value: payload,
          options: [
            {key:'back', value:'Back'},
            {key:'chest', value:'Chest'},
            {key:'arms', value:'Arms'},
            {key:'legs', value:'Legs'},
            {key:'shoulders', value:'Shoulders'},
            {key:'cardio', value:'Cardio'},
            {key:'core', value:'Core'}
          ]
        }), exercisesSelect,
          new TextboxQuestion({
            key:'sets',
            label:'Number of sets:',
            type: 'number',
            required: true,
            order: 3
          }),
          new TextboxQuestion({
            key:'reps',
            label:'Number of reps:',
            type: 'number',
            required: true,
            order: 4
          }),
          new TextboxQuestion({
            key:'weight',
            label:'Weight:',
            type: 'number',
            required: true,
            order: 5
          })
        ]
      }

    case ADD_NEW_WORKOUT:
      return [
        new SelectQuestion ({
          label: 'Muscle Groups',
          controlType: 'select',
          key: 'muscleGroups',
          required: true,
          options: [
            {key:'back', value:'Back'},
            {key:'chest', value:'Chest'},
            {key:'arms', value:'Arms'},
            {key:'legs', value:'Legs'},
            {key:'shoulders', value:'Shoulders'},
            {key:'cardio', value:'Cardio'},
            {key:'core', value:'Core'}
          ]
        })
      ];

    default:
      return state;
  }
};
