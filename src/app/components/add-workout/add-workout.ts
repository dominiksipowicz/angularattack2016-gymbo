import {Component} from '@angular/core';
import { DynamicForm } from '../dynamic-form/dynamic-form.component';
import { TextboxQuestion }  from '../dynamic-form/questions/textbox-question';
import { SelectQuestion } from "../dynamic-form/questions/select-question";
import {WorkoutService} from '../workout/workout.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';
import {CHANGE_GROUP, CHANGE_EXERCISE} from '../../common/reducers/options.reducer';

@Component({
  selector: 'about',
  templateUrl: 'app/components/add-workout/add-workout.html',
  styleUrls: ['app/components/add-workout/add-workout.css'],
  providers: [WorkoutService],
  directives: [DynamicForm],
  pipes: []
})
export class AddWorkout {
  workoutData:[{}];
  questions:[{}];
  // options: Observable<[]>;
  options: any;

  constructor(private workoutService: WorkoutService, public store: Store<[{}]>) {
    let options$ = store.select('options');
    options$.subscribe((value) => {
      this.options = value;
    });

    this.workoutData = [
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
    this.questions = [
      new SelectQuestion({
        key:'muscle',
        label: 'Muscle Group',
        options: [
          {key:'back', value:'Back'},
          {key:'chest', value:'Chest'},
          {key:'arms', value:'Arms'},
          {key:'legs', value:'Legs'},
          {key:'shoulders', value:'Shoulders'},
          {key:'cardio', value:'Cardio'},
          {key:'core', value:'Core'}
        ],
        value: 'back',
        required: true,
        order: 1
      }),
      new SelectQuestion({
        key:'exercise',
        label: 'Exercise',
        options: [
          {key:'back',  value:'Back'},
          {key:'chest', value:'Chest'},
          {key:'arms',  value:'Arms'},
          {key:'legs',  value:'Legs'}
        ],
        value: 'legs',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key:'sets',
        label:'Number of sets:',
        type: 'number',
        value: 6,
        required: true,
        order: 3
      }),
      new TextboxQuestion({
        key:'reps',
        label:'Number of reps:',
        type: 'number',
        value: 4,
        required: true,
        order: 4
      })
    ]
  }

  createWorkout(content): void {
    // let workoutContent = 'createWorkout() at: ' + Date.now();
    this.workoutService.createWorkout(JSON.stringify(content));
  }

  ngOnInit() {

  }
}
