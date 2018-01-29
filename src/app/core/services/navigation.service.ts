import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  navigationState: boolean = false;
  constructor() { }

  updateNavigation() {
    this.navigationState = this.navigationState ? false : true;
    console.log('service :' + this.navigationState);
  }

}
