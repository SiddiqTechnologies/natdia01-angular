import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialguardGuard implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      const isCompleted = await localStorage.getItem('tutorialCompleted')

      if (isCompleted === 'FINISHED') {
        return true;
      } else {
        this.router.navigateByUrl('/tutorial');
        return false;
      }
  }
}
