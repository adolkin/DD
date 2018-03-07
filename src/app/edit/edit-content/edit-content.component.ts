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

  defaultData: any;
  imgUrl: string = '';
  youtubeId: string = '';

  imgString: string = '';
  youtubeString: string = '';
  youtubeStringHead =`
  <div style="width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://www.youtube.com/embed/`
  youtubeStringTail =`?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%">
    </iframe>
  </div>`

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  // close popup
  // return back item content as default
  close(): void {
    this.dashboardService.getItem(this.page, this.item.key)
      .subscribe(data => {
        this.defaultData = data
        this.item.content = this.defaultData.content;
      });
    this.visible = false;
  }

  // edit content of item and send to dashboardService to handle
  editItem(item: Item): void {
    this.dashboardService.editItem(this.page, item);
    this.visible = false;
  }

  generateImg(imgUrl: string) {
    this.imgString = '<img src="' + imgUrl + '" alt="Image">';
    this.item.content += this.imgString;
    this.imgString = '';
  }

  generateYoutube(youtubeId: string) {
    this.youtubeString = this.youtubeStringHead + youtubeId + this.youtubeStringTail;
    this.item.content += this.youtubeString;
    this.youtubeString = '';
  }
}
