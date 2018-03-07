import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SettingService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  // Get nagivation time from Firebase 
  getNavigationTime() {
    return this.db.object('/setting/navigationTime').valueChanges();
  }

  // Update new navigation time to Firebase
  setNavigtionTime(time: number) {
    return this.db.object('/setting').update({ navigationTime: time });
  }

  // Get background for each page
  getBackground(page: string) {
    return this.db.object('/setting/' + page).valueChanges();
  }

  // Set backgound for each page
  setBackground(page: string, background: any) {
    return null;
  }

  getSetting() {
    return this.db.object('/setting').valueChanges();
  }

  setSetting(formData: any) {
    return this.db.object('/setting').update({
      navigationTime: formData.value.navigationTime * 1000,
      page1Background: formData.value.page1Background,
      page2Background: formData.value.page2Background
    });
  }
}
