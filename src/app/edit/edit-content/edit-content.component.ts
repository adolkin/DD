import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { DashboardService } from '@services/dashboard.service';
import { LocationService } from '@services/location.service';
import { popupAnimation } from '@animations/popup.animations';
import { Item } from '@models/item';
import { Location } from '@models/location';

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

  @ViewChild('location') location: ElementRef;

  defaultData: any;
  imgUrl: string = '';
  youtubeId: string = '';
  locations$: Location[];
  displaySearch = false;

  imgString: string = '';
  youtubeString: string = '';
  weatherString: string = '';

  imgStringHead = `
  <img src="`;
  imgStringTail = '" alt="Image">';
  youtubeStringHead = `
  <div style="width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://www.youtube.com/embed/`;
  youtubeStringTail = `?autoplay=1" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%">
    </iframe>
  </div>`;

  constructor(
    private dashboardService: DashboardService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
  }

  // Close popup
  // Return back item content as default
  close(): void {
    this.dashboardService.getItem(this.page, this.item.key)
      .subscribe(data => {
        this.defaultData = data;
        this.item.content = this.defaultData.content;
      });
    this.visible = false;
    this.location.nativeElement.value = '';
    this.displaySearch = false;
  }

  // Edit content of item and send to dashboardService to handle
  editItem(item: Item): void {
    this.dashboardService.editItem(this.page, item);
    this.visible = false;
  }

  generateImg(imgUrl: string) {
    this.imgString = this.imgStringHead + imgUrl + this.imgStringTail;
    this.item.content += this.imgString;
    this.imgString = '';
  }

  generateYoutube(youtubeId: string) {
    this.youtubeString = this.youtubeStringHead + youtubeId + this.youtubeStringTail;
    this.item.content += this.youtubeString;
    this.youtubeString = '';
  }

  searchLocation(term: string) {
    if (term.length >= 3) {
      this.locationService.searchLocation(term)
        .subscribe(locations => {
          this.locations$ = locations;
          console.log(this.locations$);
          this.displaySearch = true;
        });
    }
    // console.log(term);
  }

  selectLocation(location: Location) {
    // console.log(location);
    // console.log(this.location.nativeElement.value);
    this.location.nativeElement.value = location.name;
    this.displaySearch = false;
  }

  generateWeather() {
    return null;
  }
}
