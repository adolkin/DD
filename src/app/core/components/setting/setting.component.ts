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
  navigationTime: any;
  page1Background: string = '';
  page2Background: string = '';
  updateStatus: string = '';
  userName: any;

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
    var newWindow = window.open('/view');
  }

  // Hide/show Edit Mode
  openEdit() {
    this.hideEdit = this.hideEdit === true ? false : true;
  }

  getSetting() {
    this.settingService.getSetting()
      .subscribe(setting => {
        this.setting = setting;
        // console.log(this.setting);
        this.navigationTime = <number>this.setting.navigationTime / 1000;
        this.page1Background = this.setting.page1Background;
        this.page2Background = this.setting.page2Background;      
      })
  }

  setSetting(formData) {
    this.settingService.setSetting(formData);
  }
}
