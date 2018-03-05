import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import { Item } from '@models/item';
import { DashboardService } from '@services/dashboard.service';
import { NavigationService } from '@services/navigation.service';
import { routerAnimation } from '@animations/router.animation';

@Component({
  selector: 'app-page1-edit',
  templateUrl: './page1-edit.component.html',
  styleUrls: ['./page1-edit.component.scss'],
  animations: [routerAnimation]
})
export class Page1EditComponent implements OnInit {

  // Animation when navigation
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  items: Item[] = [];
  options: GridsterConfig;
  dashboard: Array<any>;
  selectedItem: Item;

  showDialog = false;
  page: string = '/page1';

  constructor(
    private dashboardService: DashboardService
  ) { }

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
      itemChangeCallback: this.itemChange.bind(this),
      itemResizeCallback: this.itemResize,
      enableEmptyCellContextMenu: true,
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
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: this.eventStop
      },
      resizable: {
        enabled: true,
        stop: this.eventStop
      },
      swap: false
    };
  }

  // trigger after drag, drop or resize item
  eventStop(item, scope) {
    // console.info('eventStop', item, scope);
  }

  // when item change position or cols, rows pass to dashboard2Service to handle
  itemChange(item, scope) {
    // console.info('itemChanged', item, scope);
    this.dashboardService.editItem(this.page, item);
  }

  // trigger when resize rols, cols of item
  itemResize(item, scope) {
    // console.info('itemResized', item, scope);
  }

  // trigger when initialization
  itemInit(item) {
    // console.info('itemInitialized', item);
  }

  // Get data from firebase, call dashboardService
  getAll(): void {
    this.dashboardService.getAll(this.page)
      .subscribe(items => {
        this.dashboard = items;
      })
  }

  // Add new Item 
  addItem(): void {
    let newItem: any = {
      content: ``,
      rows: 1,
      cols: 1,
    }
    this.dashboardService.addItem(this.page, newItem);
  }

  //Delete Item
  removeItem($event, item) {
    this.dashboardService.removeItem(this.page, item);
  }

  //Select Item 
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  //trackBy ngFor
  trackByItems(index: number, item: Item) {
    return item.content;
  }

}
