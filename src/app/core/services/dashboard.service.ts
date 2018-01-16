import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DashboardService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll() {
    return this.db.list('/page1').valueChanges();
  }
}