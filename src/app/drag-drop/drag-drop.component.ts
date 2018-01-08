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
  private bodyText: string;

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
    this.bodyText="abc";

    this.options = {
      gridType: 'fit',
      compactUp: false,
      compactLeft: false,
      itemChangeCallback: DragDropComponent.itemChange,
      itemResizeCallback: DragDropComponent.itemResize,
      margin: 10,
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
      {cols: 1, rows: 1, y: 0, x: 0},
      {cols: 1, rows: 1, y: 10, x: 10}
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
}
