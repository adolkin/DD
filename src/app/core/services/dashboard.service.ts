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
      // .valueChanges()
      .snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() })); 
      })
  }

  addBox(box: any) {
    return this.db.list('/page1').push(box);
  } 

  editBox(item: Item) {
    console.log(item);
    // return this.db.object('/page1/' + item.key)
    //   .update(item);
  }
}
