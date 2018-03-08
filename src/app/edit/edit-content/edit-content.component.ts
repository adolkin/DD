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
  selectedLocation: Location;
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
  youtubeStringTail = `?autoplay=1" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"></iframe>
</div>`;

  weatherStringHead = `
<iframe style="display: block;" width="100%" height="520" frameborder="0"  scrolling="no" 
src="https://www.willyweather.com.au/widget/preview.html?template=outFrame
&sid=mr25v9co7u7pq194trk6gknaa4
&widget%5Bcolour%5D=%23eeeeee
&widget%5BfontFamily%5D=sans-serif
&widget%5BweatherTypes%5D%5B%5D=1
&widget%5BwidgetType%5D=9
&widget%5BwidgetHeaderType%5D=1
&widget%5Blocations%5D%5B0%5D%5Bname%5D=`;
  weatherStringTail = `
&widget%5Blocations%5D%5B1%5D%5Bname%5D=
&widget%5Blocations%5D%5B1%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B1%5D%5Bid%5D=
&widget%5Blocations%5D%5B1%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B2%5D%5Bname%5D=
&widget%5Blocations%5D%5B2%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B2%5D%5Bid%5D=
&widget%5Blocations%5D%5B2%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B3%5D%5Bname%5D=
&widget%5Blocations%5D%5B3%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B3%5D%5Bid%5D=
&widget%5Blocations%5D%5B3%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B4%5D%5Bname%5D=
&widget%5Blocations%5D%5B4%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B4%5D%5Bid%5D=
&widget%5Blocations%5D%5B4%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B5%5D%5Bname%5D=
&widget%5Blocations%5D%5B5%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B5%5D%5Bid%5D=
&widget%5Blocations%5D%5B5%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B6%5D%5Bname%5D=
&widget%5Blocations%5D%5B6%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B6%5D%5Bid%5D=
&widget%5Blocations%5D%5B6%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B7%5D%5Bname%5D=
&widget%5Blocations%5D%5B7%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B7%5D%5Bid%5D=
&widget%5Blocations%5D%5B7%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B8%5D%5Bname%5D=
&widget%5Blocations%5D%5B8%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B8%5D%5Bid%5D=
&widget%5Blocations%5D%5B8%5D%5BtypeId%5D=
&widget%5Blocations%5D%5B9%5D%5Bname%5D=
&widget%5Blocations%5D%5B9%5D%5BdisplayName%5D=
&widget%5Blocations%5D%5B9%5D%5Bid%5D=
&widget%5Blocations%5D%5B9%5D%5BtypeId%5D=
&widget%5Bwidth%5D=700
&widget%5Bheight%5D=520"></iframe>`

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

  searchLocation(term: string) {
    if (term.length >= 3) {
      this.locationService.searchLocation(term)
        .subscribe(locations => {
          this.locations$ = locations;
          console.log(this.locations$);
          this.displaySearch = true;
        });
    }
  }

  selectLocation(location: Location) {
    this.location.nativeElement.value = location.name;
    this.displaySearch = false;
    this.selectedLocation = location;
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

  generateWeather() {
    // console.log(this.selectedLocation);
    // console.log(this.selectedLocation.name);
    // console.log(this.selectedLocation.name.replace(/ /g,"+"));
    this.weatherString = this.weatherStringHead + this.selectedLocation.name.replace(/ /g, "+") +
      `
&widget%5Blocations%5D%5B0%5D%5BdisplayName%5D=` + this.selectedLocation.name.replace(/ /g, "+") +
      `
&widget%5Blocations%5D%5B0%5D%5Bid%5D=`+ this.selectedLocation.id +
      `
&widget%5Blocations%5D%5B0%5D%5BtypeId%5D=`+ this.selectedLocation.typeId +
      this.weatherStringTail;
    console.log(this.weatherString);
    this.item.content += this.weatherString;
  }
}
