import { Component, OnInit, Input } from '@angular/core';

import { DashboardService } from '@services/dashboard.service';
import { popupAnimation } from '@animations/popup.animations';

import { Item } from '@shared/models/item';

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

  weatherView = false;
  htmlView = true;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  weather() {
    this.weatherView = true;
    this.htmlView = false;
  }

  html() {
    this.weatherView = false;
    this.htmlView = true;
  }

  // close popup
  close(): void {
    this.visible = false;
    // this.weatherView = false;
  }

  // edit content of item and send to dashboardService to handle
  editItem(item: Item): void {
    this.dashboardService.editItem(this.page, item);
    this.visible = false;
    this.weatherView = false;
  }
}
