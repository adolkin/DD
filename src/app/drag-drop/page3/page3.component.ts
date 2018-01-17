import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../../core/services/dashboard.service';
import { Item } from '../../shared/models/item';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  items: Item[] = [];
  options: GridsterConfig;
  dashboard: Array<any>;
  showDialog = false;

  selectedItem: Item;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
    this.createOptions();
  }

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

  eventStop(item, scope) {
    // console.info('eventStop', item, scope);
  }

  itemChange(item, scope) {
    // console.info('itemChanged', item, scope);
    this.dashboardService.editItem(item);
  }

  itemResize(item, scope) {
    // console.info('itemResized', item, scope);
  }

  itemInit(item) {
    // console.info('itemInitialized', item);
  }

  getAll(): void {
    this.dashboardService.getAll()
      .subscribe(items => {
        this.items = items;
        this.dashboard = items;
      })
  }

  addItem(): void {
    let newItem: any = {
      content: ``,
      rows: 1,
      cols: 1,
    }
    this.dashboardService.addItem(newItem);
  }

  removeItem($event, item) {
    this.dashboardService.removeItem(item);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  // changeText(bodyText: any) {
  //   bodyText = this.sanitizer.bypassSecurityTrustHtml(bodyText);
  //   this.selectedBox.content = bodyText;
  // }

  // carousel(): void {
  //   this.router.navigate(['dragdrop/page1']);
  //   // this.carouselState = this.carouselState === false ? true : false;
  //   // console.log(this.carouselState);
  //   // this.navigate();
  // }

  // // navigate(): void {
  // //   if(this.carouselState == true){
  // //     setTimeout((router: Router) => {
  // //       this.router.navigate(['dragdrop/page2']);
  // //     }, 5000);
  // //   }
  // // }
}