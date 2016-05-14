/**
 * Created by Marian on 14/05/2016.
 */
import { Component, Input } from '@angular/core';
import {AuthService} from "../../common/services/auth.service";

@Component({
  selector: 'user-info',
  template: `
<div class="user-info" *ngIf="authenticated">
  <div class="user-data-cell"><img [src]="auth.avatar" alt="Avatar"></div>
  <div class="user-data-cell">{{ auth.displayName }}</div>
</div>
  `,
  styles: [`
  img {
    width: 40px;
  }
  .user-data-cell {
    padding: 5px;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  `]
})
export class UserInfo {
  @Input() authenticated: boolean;
  @Input() auth: any;
}
