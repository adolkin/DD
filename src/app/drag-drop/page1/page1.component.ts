import { DashBoard } from './../../shared/models/dashboard';
import { BoxService } from './../../core/services/box.service';
import { Box } from './../../shared/models/box';

import { ChangeDetectionStrategy, Component, OnInit, HostBinding } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { routerAnimation } from '../../shared/animations/router.animation';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  animations: [routerAnimation]
})
export class Page1Component implements OnInit {

  // Animation when navigation
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  options: GridsterConfig;
  dashboard: DashBoard[];
  showDialog = false;

  box: any = {};
  boxs: Box[];
  selectedBox: DashBoard;
  viewed = true;

  carouselState: boolean = false;

  // trigger after drag, drop or resize item
  static eventStop(item, scope) {
    // console.info('eventStop', item, scope);
  }

  //trigger when item change
  static itemChange(item, scope) {
    // console.info('itemChanged', item, scope);
  }

  // trigger when resize rols, cols of item
  static itemResize(item, scope) {
    // console.info('itemResized', item, scope);
  }

  // trigger when initialization
  static itemInit(item) {
    // console.info('itemInitialized', item);
  }

  constructor(
    private sanitizer: DomSanitizer,
    private boxService: BoxService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.createOptions();
    this.getBoxs();

  }

  // Create Grid option https://github.com/tiberiuzuld/angular-gridster2
  private createOptions(): void {
    this.options = {
      gridType: 'fit',
      compactUp: false,
      compactLeft: false,
      itemChangeCallback: Page1Component.itemChange,
      itemResizeCallback: Page1Component.itemResize,
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
        stop: Page1Component.eventStop
      },
      resizable: {
        enabled: true,
        stop: Page1Component.eventStop
      },
      swap: false
    };
  }

  // get data and bind this data to boxs array
  private getBoxs(): void {
    this.boxService.getBoxs()
      .subscribe(boxs => {
        this.boxs = boxs;
        for (var i = 0; i < this.boxs.length; i++) {
          boxs[i].bodyText = this.sanitizer.bypassSecurityTrustHtml(boxs[i].bodyText);
        }
        this.createDashboard();
      });
  }

  // create items and their content, position, cols and rows
  private createDashboard(): void {
    this.dashboard = [
      { id: this.boxs[0].id, content: this.boxs[0].bodyText, x: 0, y: 0, cols: 1, rows: 2 },
      { id: this.boxs[1].id, content: this.boxs[1].bodyText, x: 0, y: 3, cols: 3, rows: 3 },
      { id: this.boxs[2].id, content: this.boxs[2].bodyText, x: 4, y: 3, cols: 4, rows: 4 },
      { id: this.boxs[3].id, content: this.boxs[3].bodyText, x: 7, y: 7, cols: 1, rows: 1 },
    ];
  }

  // add new item 
  addBox() {
    this.boxService.addBox()
      .subscribe(box => {
        this.boxs.push(box);
        let newItem: any = {
          content: box.bodyText = ``,
          id: box.id
        }
        this.dashboard.push(newItem);
        console.log(this.dashboard);
        // newItem.content = this.sanitizer.bypassSecurityTrustHtml(newItem.content);
      });

  }

  // delete item
  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  // select itemm to edit 
  onSelect(box: DashBoard): void {
    this.selectedBox = box;
  }

  // when bodyText changed at Modal Component, the text of Page1 Component change
  changeText(bodyText: any) {
    bodyText = this.sanitizer.bypassSecurityTrustHtml(bodyText);
    this.selectedBox.content = bodyText;
  }

  // carousel(): void {
  //   this.carouselState = this.carouselState === false ? true : false;
  //   console.log(this.carouselState);
  //   this.navigate();
  // }

  // navigate(): void {
  //   if(this.carouselState == true){
  //     setTimeout((router: Router) => {
  //       this.router.navigate(['dragdrop/page2']);
  //     }, 5000);
  //   }
  // }

  
}
