/**
 * Created by Marian on 14/05/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MdButton} from '@angular2-material/button';

@Component({
  selector: 'sign-in',
  directives: [MdButton],
  template: `
<button md-raised-button
        color="accent"
        (click)="signInWithGithub.emit()"
        type="button"
        *ngIf="!authenticated">Github</button>
  `
})
export class SignIn {
  @Input() authenticated: boolean;
  @Output() signInWithGithub: EventEmitter<any> = new EventEmitter(false);
}
