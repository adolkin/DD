import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NavigationService {
  constructor(
    private db: AngularFireDatabase
  ) { }

  // Get nagivation time from Firebase 
  getNavigationTime() {
    return this.db.object('/setting/navigationTime').valueChanges();
  }

  // Update new navigation time to Firebase
  setNavigtionTime(time: number) {
    return this.db.object('/setting').update({navigationTime: time});
  }
}
