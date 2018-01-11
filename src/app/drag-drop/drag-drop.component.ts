import { routerTransition } from './../shared/animations/router.animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  animations: [ routerTransition ]
})
export class DragDropComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
