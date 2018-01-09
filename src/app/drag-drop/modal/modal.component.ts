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
  @Output() bodyText: EventEmitter<string> = new EventEmitter<string>();

  data: string = "";  
  constructor() {
   }

  ngOnInit() {
   }

  close(): void {
    this.visible = false;
    this.bodyText.emit(this.box.content);
  }

  saveChange(box: Box): void {
    this.visible = false;
    this.data = this.box.content;
    console.log(this.data);
    this.bodyText.emit(this.data);  
  }
}
