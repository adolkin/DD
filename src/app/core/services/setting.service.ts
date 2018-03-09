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
      page2Background: formData.value.page2Background,
    });
  }

  getDisplayTime() {
    return this.db.list('/setting/displayTime').valueChanges();
    // //get key and bind to item.key
    // .snapshotChanges().map(actions => {
    //   return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    // })
  }

  setDisplayTimePage1(formData: any) {
    return this.db.object('/setting/displayTime/page1').update({
      0: formData.value.page1From0,
      1: formData.value.page1From1,
      2: formData.value.page1From2,
      3: formData.value.page1From3,
      4: formData.value.page1From4,
      5: formData.value.page1From5,
      6: formData.value.page1From6,
      7: formData.value.page1From7,
      8: formData.value.page1From8,
      9: formData.value.page1From9,
      10: formData.value.page1From10,
      11: formData.value.page1From11,
      12: formData.value.page1From12,
      13: formData.value.page1From13,
      14: formData.value.page1From14,
      15: formData.value.page1From15,
      16: formData.value.page1From16,
      17: formData.value.page1From17,
      18: formData.value.page1From18,
      19: formData.value.page1From19,
      20: formData.value.page1From20,
      21: formData.value.page1From21,
      22: formData.value.page1From22,
      23: formData.value.page1From23,
    });
  }

  setDisplayTimePage2(formData: any) {
    return this.db.object('/setting/displayTime/page2').update({
      0: formData.value.page2From0,
      1: formData.value.page2From1,
      2: formData.value.page2From2,
      3: formData.value.page2From3,
      4: formData.value.page2From4,
      5: formData.value.page2From5,
      6: formData.value.page2From6,
      7: formData.value.page2From7,
      8: formData.value.page2From8,
      9: formData.value.page2From9,
      10: formData.value.page2From10,
      11: formData.value.page2From11,
      12: formData.value.page2From12,
      13: formData.value.page2From13,
      14: formData.value.page2From14,
      15: formData.value.page2From15,
      16: formData.value.page2From16,
      17: formData.value.page2From17,
      18: formData.value.page2From18,
      19: formData.value.page2From19,
      20: formData.value.page2From20,
      21: formData.value.page2From21,
      22: formData.value.page2From22,
      23: formData.value.page2From23,
    });
  }
}
