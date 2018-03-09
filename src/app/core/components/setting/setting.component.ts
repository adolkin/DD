import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { SettingService } from '@services/setting.service';

import { Time, TIMES } from '@models/time';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  setting: any;
  hideEdit = true;
  navigationTime: number;
  page1Background: string = '';
  page2Background: string = '';
  displayTime: any[] = [];
  page1DisplayTime: any[]= [];  
  page2DisplayTime: any[]= [];  
  updateStatus: string = '';
  userName: string;
  loading = false;
  times = TIMES;

  constructor(
    private settingService: SettingService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
    this.getSetting();
  }

  getUser() {
    this.userName = localStorage.getItem('user');
    // console.log(this.userName);
  }

  logout() {
    this.authService.logout();
  }

  // Open View Mode in new tab
  openView() {
    var newWindow = window.open('/view', "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=1600, height=800");
  }

  // Hide/show Edit Mode
  openEdit() {
    this.hideEdit = this.hideEdit === true ? false : true;
  }  

  getSetting() {
    this.settingService.getSetting()
      .subscribe(setting => {
        this.setting = setting;
        console.log(this.setting);
        this.navigationTime = <number>this.setting.navigationTime / 1000;
        this.page1Background = this.setting.page1Background;
        this.page2Background = this.setting.page2Background;

        this.displayTime = this.setting.displayTime;
        this.page1DisplayTime = this.setting.displayTime.page1;
        this.page2DisplayTime = this.setting.displayTime.page2;
        console.log(this.displayTime);
        console.log('page1Time:' + this.page1DisplayTime);
        console.log('page2Time:' + this.page2DisplayTime);
      });
  }

  setSetting(formData) {
    console.log(formData);
    // this.loading = true;
    // this.updateStatus = '';
    // this.settingService.setSetting(formData)
    //   .then(res => {
    //     this.loading = false;
    //     this.updateStatus = "UPDATED!"
    //   });
  }

  change(value: any){
    console.log(value);
  }

  customTrackBy(index: number, obj: any): any {
    return  index;
  }
}
