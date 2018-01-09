import { Box } from './../shared/models/box';
import { BOXS } from './../shared/mock-boxs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<Object>;
  showDialog = false;

  boxs = BOXS;
  selectedBox: Box;
  viewed = true;
  
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

  ngOnInit() {

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

    this.dashboard = [
      {cols: 2, rows: 2, y: 0, x: 0, content: this.boxs[0].bodyText },
      {cols: 4, rows: 4, y: 2, x: 2, content: this.boxs[1].bodyText },
      {cols: 2, rows: 2, y: 7, x: 7, content: this.boxs[2].bodyText },
      {cols: 1, rows: 1, y: 10, x: 10, content: this.boxs[3].bodyText }
    ];
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  };

  onSelect(box: Box): void {
    console.log(box);
    this.selectedBox = box;
  }

  changeText(bodyText: string) {
    console.log(bodyText);
    this.selectedBox.bodyText = bodyText;
  }
}
