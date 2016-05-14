import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthMethods} from 'angularfire2';

import {GymboApp} from './app/gymbo-app';


// enableProdMode()

bootstrap(GymboApp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy}),
  // Add FireBase providers
  defaultFirebase('https://bitbee.firebaseio.com'),
  firebaseAuthConfig({method: AuthMethods.Popup}),
  FIREBASE_PROVIDERS
])
.catch(err => console.error(err));
