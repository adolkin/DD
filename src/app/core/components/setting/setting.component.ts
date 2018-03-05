import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  hideEdit = true;
  navigationTime: number;

  constructor( 
    private navigationService: NavigationService) { }

  ngOnInit() {
  }

  private openView() {
    var newWindow = window.open('/view');
  }

  private openEdit() {
    this.hideEdit = this.hideEdit === true ? false : true;
  }
}
