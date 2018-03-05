import { Item } from './../../shared/models/item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DashboardService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  //get data from Firebase under list page3
  getAll(page:string) {
    return this.db.list(page)
    //get key and bind to item.key
      .snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() })); 
      })
  }

  // add data to Firebase under list page3
  addItem(page:string, item: any) {
    return this.db.list(page).push(item);
  } 

  // edit data to Firebase under list page3
  editItem(page:string, item: Item) {
    return this.db.object(page + '/' + item.key)
      .update(item);
  }

  // delete data to Firebase under list page3
  removeItem(page:string, item: Item) {
    return this.db.object(page + '/' + item.key)
      .remove()
      .then(x => console.log(item.key + "deleted"));
  }
}
