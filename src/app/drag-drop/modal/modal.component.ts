import { BoxService } from './../../core/services/box.service';
import { Dashboard } from './../../shared/models/dashboard';
import { popupAnimation } from './../../shared/animations/popup.animations';
import { Box } from './../../shared/models/box';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [popupAnimation]
})
export class ModalComponent implements OnInit {

  @Input() box;
  @Input() visible: boolean;

  data: string = "";

  constructor(
    private boxService: BoxService
  ) {}

  ngOnInit() {
  }

  close(): void {
    this.visible = false;
  }

  editBox(text: any): void {
    var newBox: Box = {
      id : this.box.id,
      bodyText : text
    };

    this.boxService.editBox(newBox)
      .subscribe();

    this.boxService.getBoxs()
      .subscribe(data => console.log(data));

    this.visible = false;
  }
}
