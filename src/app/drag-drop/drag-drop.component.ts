import { BoxService } from './../core/services/box.service';
import { Dashboard } from './../shared/models/dashboard';
import { Box } from './../shared/models/box';
import { BOXS } from './../shared/mock-boxs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<Object>;
  showDialog = false;

  box: any = {};
  boxs: Box[];
  selectedBox: Box;
  viewed = true;
  trustedUrl: SafeUrl[];

  static eventStop(item, scope) {
    console.info('eventStop', item, scope);
  }

  static itemChange(item, scope) {
    console.info('itemChanged', item, scope);
  }

  static itemResize(item, scope) {
    console.info('itemResized', item, scope);
  }

  static itemInit(item) {
    console.info('itemInitialized', item);
  }

  constructor(
    private sanitizer: DomSanitizer,
    private boxService: BoxService
  ) {
  }

  ngOnInit() {
    this.createOptions();
    this.getBoxs();
  }

  private createOptions(): void {
    this.options = {
      gridType: 'fit',
      compactUp: false,
      compactLeft: false,
      itemChangeCallback: DragDropComponent.itemChange,
      itemResizeCallback: DragDropComponent.itemResize,
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
        stop: DragDropComponent.eventStop
      },
      resizable: {
        enabled: true,
        stop: DragDropComponent.eventStop
      },
      swap: false
    };
  }

  private getBoxs(): void {
    this.boxService.getBoxs()
      .subscribe(boxs => {
        this.boxs = boxs;
        for (var i = 0; i < this.boxs.length; i++)
        {
          boxs[i].bodyText = this.sanitizer.bypassSecurityTrustHtml(boxs[i].bodyText);
          console.log(this.boxs[i].bodyText);
        }
        
        this.createDashboard();
      });
  }

  private createDashboard(): void {
    this.dashboard = [
      { cols: 2, rows: 2, y: 0, x: 0, content: this.boxs[0].bodyText },
      { cols: 4, rows: 4, y: 2, x: 2, content: this.boxs[1].bodyText },
      { cols: 4, rows: 2, y: 7, x: 7, content: this.boxs[2].bodyText }
    ];
  }

  addItem() {
    this.dashboard.push({});
  };

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  onSelect(box: Box): void {
    console.log(box);
    this.selectedBox = box;
  }

  changeText(bodyText: string) {
    console.log(bodyText);
    this.selectedBox.bodyText = bodyText;
  }
}
