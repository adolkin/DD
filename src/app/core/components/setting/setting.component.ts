import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  hideEdit = true;
  navigationTime: any;
  updateStatus: string = '';

  constructor( 
    private navigationService: NavigationService) { }

  ngOnInit() {
    this.getNavigationTime();
  }

  // Open View Mode in new tab
  openView() {
    var newWindow = window.open('/view');
  }

  // Hide/show Edit Mode
  openEdit() {
    this.hideEdit = this.hideEdit === true ? false : true;
  }

  // Get navigation time by calling navigation Service
  getNavigationTime() {
    this.navigationService.getNavigationTime()
      .subscribe(time => {
        this.navigationTime = <number>time / 1000;
      });
  }

  // Update navigation time
  setNavigtaionTime(time: any) {
    this.updateStatus = "Updated";  
    this.navigationService.setNavigtionTime(time * 1000);    
  }

}
