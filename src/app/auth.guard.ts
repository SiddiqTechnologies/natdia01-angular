import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalService } from './services/modal.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  confirmedResult: boolean;
  inputResult: string;
  messageResult: boolean;
  customResult: string;  

  constructor(
    private afAuth: AngularFireAuth,
    private kModal: ModalService,
    private router: Router
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {

    const user = await this.afAuth.auth.currentUser;
    const isLoggedIn = !!user;
    if (!isLoggedIn) {
      // this.snack.authError();
      this.kModal.message(
        'Please Login To Access'
      ).pipe(
        take(1) // take() manages unsubscription for us
      ).subscribe(result => {
          console.log({ messageResult: result });
          this.messageResult = result;
          this.router.navigate(['examples/login']).catch(err => console.log(err));
        });
      }
    return isLoggedIn;
  }

}
