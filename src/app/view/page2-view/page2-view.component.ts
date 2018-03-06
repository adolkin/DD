import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import { Item } from '@models/item';
import { DashboardService } from '@services/dashboard.service';
import { SettingService } from '@services/setting.service';
import { routerAnimation } from '@animations/router.animation';

@Component({
  selector: 'app-page2-view',
  templateUrl: './page2-view.component.html',
  styleUrls: ['./page2-view.component.scss'],
  animations: [routerAnimation]
})
export class Page2ViewComponent implements OnInit {

  // Animation when navigation
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  items: Item[] = [];
  options: GridsterConfig;

  route: any;

  page: string = '/page2';
  navigationTime: number;

  constructor(
    private dashboardService: DashboardService,
    private settingService: SettingService,
    private router: Router
  ) {   
  }

  ngOnInit() {
    this.getAll();
    this.createOptions();
    this.navigate();
  }

  // Create Grid option https://github.com/tiberiuzuld/angular-gridster2
  private createOptions(): void {
    this.options = {
      gridType: 'fit',
      compactUp: false,
      compactLeft: false,
      margin: 1,
      outerMargin: true,
      maxItemCols: 50,
      minItemCols: 1,
      maxItemRows: 50,
      minItemRows: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 250,
      fixedRowHeight: 250,
      draggable: {
        delayStart: 0,
        enabled: false,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
      },
      resizable: {
        enabled: false,
      },
      swap: false
    };
  }

  // Get data from firebase, call dashboardService
  getAll(): void {
    this.dashboardService.getAll(this.page)
      .subscribe(items => {
        this.items = items;
      })
  }

  // Get navigation time from Firbase and navigate to page2 
  navigate(): void {
    this.settingService.getNavigationTime()
    .subscribe(data => {
      this.navigationTime = <number>data;
      this.route = setTimeout((router: Router) => {
        this.router.navigate(['view/page1']);
      }, this.navigationTime);
    });
  }
}