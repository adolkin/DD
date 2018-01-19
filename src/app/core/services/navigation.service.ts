import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavigationService {

  navigationState: boolean = false;

  constructor() { }

  updateNavigation() {
    this.navigationState = this.navigationState ? false : true;
    console.log('service :' + this.navigationState);
  }

}
