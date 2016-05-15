import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods} from 'angularfire2';

import {GymboApp} from './app/gymbo-app';

import {provideStore} from '@ngrx/store';
import {options} from 'app/common/reducers/options.reducer.ts';
import {SelectQuestion} from 'app/common/reducers/select-question';

// enableProdMode()

bootstrap(GymboApp, [
  provideStore({options}, {options: [
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
  ]}),
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy}),
  // Add FireBase providers
  defaultFirebase('https://bitbee.firebaseio.com'),
  firebaseAuthConfig({method: AuthMethods.Popup}),
  FIREBASE_PROVIDERS
])
.catch(err => console.error(err));
