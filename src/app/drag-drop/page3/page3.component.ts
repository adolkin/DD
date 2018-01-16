import { DashboardService } from './../../core/services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  boxs: Observable<any[]>;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.boxs = this.dashboardService.getAll();

    console.log(this.boxs);
    // this.dashboardService.getAll
    //   .subscribe(dashboards => {
    //     this.dashboards = dashboards;
    //     console.log(this.dashboards);
    //   })
  }
  // constructor(db: AngularFireDatabase) {
  //   db.list('/courses')
  //     .valueChanges()
  //     .subscribe(courses => {
  //       this.courses = courses;
  //       console.log(this.courses);
  //     })
  // }

}
