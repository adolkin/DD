import { Item } from './../../shared/models/item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DashboardService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  //get data from Firebase under list page3
  getAll() {
    return this.db.list('/page3')
    //get key and bind to item.key
      .snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() })); 
      })
  }

  // add data to Firebase under list page3
  addItem(item: any) {
    return this.db.list('/page3').push(item);
  } 

  // edit data to Firebase under list page3
  editItem(item: Item) {
    return this.db.object('/page3/' + item.key)
      .update(item);
  }

  // delete data to Firebase under list page3
  removeItem(item: Item) {
    return this.db.object('/page3/' + item.key)
      .remove()
      .then(x => console.log(item.key + "deleted"));
  }
}
