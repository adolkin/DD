import { Box } from './../../shared/models/box';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
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
  }

  saveChange(box: Box): void {
    this.data = this.box.content;
    console.log(this.data);
    this.bodyText.emit(this.data);
    this.visible = false;
  }

}
