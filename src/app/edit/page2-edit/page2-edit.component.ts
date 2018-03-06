import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import { Item } from '@models/item';
import { DashboardService } from '@services/dashboard.service';

@Component({
  selector: 'app-page2-edit',
  templateUrl: './page2-edit.component.html',
  styleUrls: ['./page2-edit.component.scss'],
})
export class Page2EditComponent implements OnInit {

  items: Item[] = [];
  options: GridsterConfig;
  selectedItem: Item;

  page: string = '/page2';

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
      enableEmptyCellContextMenu: true,
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
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
      swap: false,
      displayGrid: 'always',
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

  // Right click to add new item
  emptyCellClick(event: MouseEvent, item: GridsterItem) {
    //console.info('empty cell click', event, item);
    let newItem: any = {
      content: ``,
      rows: 1,
      cols: 1,
      x: item.x,
      y: item.y
    }
    //console.log(newItem);
    this.dashboardService.addItem(this.page, newItem);
  }

  // Get data from firebase, call dashboardService
  getAll(): void {
    this.dashboardService.getAll(this.page)
      .subscribe(items => {
        this.items = items;
      })
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
