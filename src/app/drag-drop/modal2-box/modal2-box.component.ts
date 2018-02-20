import { Dashboard2Service } from './../../core/services/dashboard2.service';
import { popupAnimation } from './../../shared/animations/popup.animations';
import { Component, OnInit, Input,  } from '@angular/core';

@Component({
  selector: 'app-modal2-box',
  templateUrl: './modal2-box.component.html',
  styleUrls: ['./modal2-box.component.scss'],
  animations: [popupAnimation]
})
export class Modal2BoxComponent implements OnInit {

  // input box and visible properties from Page2Component
  @Input() item;
  @Input() visible: boolean;

  constructor(
    private dashboard2Service: Dashboard2Service
  ) {}

  ngOnInit() {
  }

  // close popup
  close(): void {
    this.visible = false;
  }

  // edit content of item and send to dashboard2Service to handle
  editItem(text: any): void {
    this.item.content = text;
    this.dashboard2Service.editItem(this.item);
    this.visible = false;
  }
}
