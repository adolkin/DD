import { DashboardService } from './../../core/services/dashboard.service';
import { popupAnimation } from './../../shared/animations/popup.animations';
import { Component, OnInit, Input,  } from '@angular/core';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss'],
  animations: [popupAnimation]
})
export class ModalBoxComponent implements OnInit {

  @Input() item;
  @Input() visible: boolean;

  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
  }

  close(): void {
    this.visible = false;
  }

  editItem(text: any): void {
    this.item.content = text;
    this.dashboardService.editItem(this.item);
    this.visible = false;
  }
}
