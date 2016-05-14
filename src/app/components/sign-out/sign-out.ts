/**
 * Created by Marian on 14/05/2016.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MdButton} from '@angular2-material/button';

@Component({
  selector: 'sign-out',
  template: `
<button md-raised-button
        color="warn"
        (click)="signOut.emit()"
        *ngIf="authenticated">Logout</button>
  `,
  directives: [MdButton]
})
export class SignOut {
  @Input() authenticated: boolean;
  @Output() signOut: EventEmitter<any> = new EventEmitter(false);
}
