import { Component, OnInit, Input } from '@angular/core';

import { DashboardService } from '@services/dashboard.service';
import { popupAnimation } from '@animations/popup.animations';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss'],
  animations: [popupAnimation]
})
export class EditContentComponent implements OnInit {

  // input box and visible properties from Page3Component
  @Input() page;
  @Input() item;
  @Input() visible: boolean;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    console.log(this.page);
  }

  // close popup
  close(): void {
    this.visible = false;
  }

  // edit content of item and send to dashboardService to handle
  editItem(text: any): void {
    this.item.content = text;
    this.dashboardService.editItem(this.page, this.item);
    this.visible = false;
  }
}
