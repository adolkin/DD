import { routerAnimation } from './../../shared/animations/router.animation';
import { DashBoard } from './../../shared/models/dashboard';
import { BoxService } from './../../core/services/box.service';
import { Box } from './../../shared/models/box';

import { ChangeDetectionStrategy, Component, OnInit, HostBinding } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: [routerAnimation]
  })
export class Page2Component implements OnInit {

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

  static eventStop(item, scope) {
    // console.info('eventStop', item, scope);
  }

  static itemChange(item, scope) {
    // console.info('itemChanged', item, scope);
  }

  static itemResize(item, scope) {
    // console.info('itemResized', item, scope);
  }

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
    // setTimeout((router: Router) => {
    //   this.router.navigate(['drapdrop/page1']);
    // }, 5000);
  }

  private createOptions(): void {
    this.options = {
      gridType: 'fit',
      compactUp: false,
      compactLeft: false,
      itemChangeCallback: Page2Component.itemChange,
      itemResizeCallback: Page2Component.itemResize,
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
        stop: Page2Component.eventStop
      },
      resizable: {
        enabled: true,
        stop: Page2Component.eventStop
      },
      swap: false
    };
  }

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

  private createDashboard(): void {
    this.dashboard = [
      { id: this.boxs[4].id, content: this.boxs[4].bodyText, x: 0, y: 0, cols: 2, rows: 2 },
      { id: this.boxs[5].id, content: this.boxs[5].bodyText, x: 0, y: 4, cols: 4, rows: 4 },
      { id: this.boxs[6].id, content: this.boxs[6].bodyText, x: 4, y: 3, cols: 3, rows: 3 },
      { id: this.boxs[7].id, content: this.boxs[7].bodyText, x: 7, y: 7, cols: 1, rows: 1 },
    ];
  }

  addBox() {
    this.boxService.addBox()
      .subscribe(box => {
        this.boxs.push(box);
        let newItem: any = {
          content: box.bodyText = ``,
          id: box.id
        }
        this.dashboard.push(newItem)
        // newItem.content = this.sanitizer.bypassSecurityTrustHtml(newItem.content);
      });

  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  onSelect(box: DashBoard): void {
    this.selectedBox = box;
  }

  changeText(bodyText: any) {
    bodyText = this.sanitizer.bypassSecurityTrustHtml(bodyText);
    this.selectedBox.content = bodyText;
  }

  carousel(): void {
    this.router.navigate(['dragdrop/page1']);
    // this.carouselState = this.carouselState === false ? true : false;
    // console.log(this.carouselState);
    // this.navigate();
  }

  // navigate(): void {
  //   if(this.carouselState == true){
  //     setTimeout((router: Router) => {
  //       this.router.navigate(['dragdrop/page2']);
  //     }, 5000);
  //   }
  // }
}
