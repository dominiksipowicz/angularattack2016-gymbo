/**
 * Created by Marian on 14/05/2016.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState | FirebaseAuthData;

  constructor(public auth$: FirebaseAuth) {
    this.authState = auth$.getAuth();

    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get expired(): boolean {
    return !this.authState || (this.authState.expires * 1000) < Date.now();
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get authenticated(): boolean {
    return this.authState !== null && !this.expired;
  }

  check() {
    return Observable.of(this.authenticated);
  }

  get displayName(): string {
    return this.authState !== null ? this.authState.github.displayName : '';
  }

  get avatar(): string {
    return this.authState !== null ? this.authState.github.profileImageURL : '';
  }

  signInWithGithub(): Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Github
    })
  }

  signOut(): void {
    return this.auth$.logout();
  }
}
