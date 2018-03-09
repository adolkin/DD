import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AuthService } from '@services/auth.service';
import { SettingService } from '@services/setting.service';

@Injectable()
export class TimeGuardService implements CanActivate {

  timeGuard: any[] = [];
  timeGuardRole: string = '';
  timeGuardPage1: string = '';
  timeGuardPage2: string = '';

  constructor(
    private authService: AuthService,
    private settingSerivce: SettingService,
    private router: Router
  ) {
    var d = new Date().getHours();
    console.log('Time now: ' + d);
    this.settingSerivce.getDisplayTime()
      .subscribe(res => {
        this.timeGuard = res;
        // console.log(this.timeGuard);
        for (var i = 0; i < this.timeGuard.length; i++) {
          for (var j = 0; j < this.timeGuard[i].length; j++) {
            // console.log('Page' + [i + 1] + ' Time: ' + [j] + ' Value: ' + this.timeGuard[i][j]);
            if (d == j && this.timeGuard[i][j] == true) {
              if (i + 1 == 1) {
                this.timeGuardPage1 = 'go';
                console.log('page1 ' + this.timeGuardPage1);
              }
              if (i + 1 == 2) {
                this.timeGuardPage2 = 'go';
                console.log('page2 ' + this.timeGuardPage2);
              }
              this.timeGuardRole = 'go';
              console.log('page ' + this.timeGuardRole)
            }
          }
        }
      });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActive func' + this.timeGuardRole)
    // return this.checkTime();
    return true;
  }

  checkTime() {
    if (this.timeGuardRole == 'go')
      return true;
    return false;
  }
}
