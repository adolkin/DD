import { Item } from './../../shared/models/item';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DashboardService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAll() {
    return this.db.list('/page1')
      .snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() })); 
      })
  }

  addItem(item: any) {
    return this.db.list('/page1').push(item);
  } 

  editItem(item: Item) {
    return this.db.object('/page1/' + item.key)
      .update(item);
  }

  removeItem(item: Item) {
    return this.db.object('/page1/' + item.key)
      .remove()
      .then(x => console.log(item.key + "deleted"));
  }
}
