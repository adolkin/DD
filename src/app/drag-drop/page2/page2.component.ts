import { NavigationService } from './../../core/services/navigation.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import { Dashboard2Service } from './../../core/services/dashboard2.service';
import { Item } from '../../shared/models/item';
import { routerAnimation } from './../../shared/animations/router.animation';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: [routerAnimation]
})
export class Page2Component implements OnInit {

  // Animation when navigation
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  items: Item[] = [];
  options: GridsterConfig;
  dashboard: Array<any>;
  showDialog = false;
  viewed = true;
  selectedItem: Item;
  carouselState = false;
  navigationState: boolean;
  route: any;

  constructor(
    private dashboard2Service: Dashboard2Service,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.navigationState = this.navigationService.navigationState;
    this.navigate();
    // console.log('page2 contructor: ' + this.navigationState);
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
  // trigger after drag, drop or resize item
  eventStop(item, scope) {
    // console.info('eventStop', item, scope);
  }

  // when item change position or cols, rows pass to dashboard2Service to handle
  itemChange(item, scope) {
    // console.info('itemChanged', item, scope);
    this.dashboard2Service.editItem(item);
  }

  // trigger when resize rols, cols of item
  itemResize(item, scope) {
    // console.info('itemResized', item, scope);
  }

  // trigger when initialization
  itemInit(item) {
    // console.info('itemInitialized', item);
  }

  // get data from Firebase
  getAll(): void {
    this.dashboard2Service.getAll()
      .subscribe(items => {
        // this.items = items;
        this.dashboard = items;
      })
  }

  // add new item which row=1, cols=1, content= '' and pass to dashboard2Service to handle
  addItem(): void {
    let newItem: any = {
      content: ``,
      rows: 1,
      cols: 1,
    }
    this.dashboard2Service.addItem(newItem);
  }

  // delete item, pass to dashboard2Service to handle
  removeItem($event, item) {
    this.dashboard2Service.removeItem(item);
  }

  // select item to edit
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  // ngFor trackBy
  trackByItems(index: number, item: Item) {
    return item.content;
  }

  // set navigationState to navigate or not 
  setState(): void {
    this.navigationState = this.navigationState ? false : true;
    this.navigationService.updateNavigation();

    // console.log("page2 setState: " + this.navigationState);

    // if navigation State == false, stop navigate
    if (this.navigationState == false) {
      clearTimeout(this.route);
    }
    else {
      this.navigate();
    }
  }

  // wait 5s and navigate to page3
  navigate(): void {
    if (this.navigationService.navigationState == true) {
      this.route = setTimeout((router: Router) => {
        this.router.navigate(['dragdrop/page3']);
      }, 5000);
    }
  }
}
