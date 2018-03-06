import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@services/navigation.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  hideEdit = true;
  navigationTime: any;
  updateStatus: string = '';
  userName: any;

  constructor( 
    private navigationService: NavigationService,
    private authService: AuthService) { }

  ngOnInit() {
    this.getNavigationTime();
    this.getUser();
  }

  getUser() {
    this.userName = localStorage.getItem('user');
    console.log(this.userName);
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
