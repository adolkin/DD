import { BoxService } from './../../core/services/box.service';
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
  
  // input box and visible properties from page1Component
  @Input() box;
  @Input() visible: boolean;

  // trigger event so page1Component change the bodyText
  @Output() bodyText: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private boxService: BoxService
  ) {}

  ngOnInit() {
  }

  // close the pop-up
  close(): void {
    this.visible = false;
  }

  // edit bodyText and emit to page1Component
  editBox(text: any): void {
    var newBox: Box = {
      id : this.box.id,
      bodyText : text
    };

    this.boxService.editBox(newBox)
      .subscribe();
    this.bodyText.emit(newBox.bodyText);
    this.visible = false;
  }
}
