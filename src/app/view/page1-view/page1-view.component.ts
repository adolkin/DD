import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import { Item } from '@models/item';
import { DashboardService } from '@services/dashboard.service';
import { NavigationService } from '@services/navigation.service';
import { routerAnimation } from '@animations/router.animation';

@Component({
  selector: 'app-page1-view',
  templateUrl: './page1-view.component.html',
  styleUrls: ['./page1-view.component.scss'],
  animations: [routerAnimation]
})
export class Page1ViewComponent implements OnInit {

  // Animation when navigation
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  items: Item[] = [];
  options: GridsterConfig;

  route: any;
  page: string = '/page1';
  navigationTime: number;

  constructor(
    private dashboardService: DashboardService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.navigate();
  }

  ngOnInit() {
    this.getAll();
    this.createOptions();
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
    this.navigationService.getNavigationTime()
      .subscribe(data => {
        this.navigationTime = <number>data;
        this.route = setTimeout((router: Router) => {
          this.router.navigate(['view/page2']);
        }, this.navigationTime);
      });
  }
}