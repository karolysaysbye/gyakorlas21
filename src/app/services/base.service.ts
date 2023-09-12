import { Injectable } from '@angular/core';
import { phones } from '../utils/phones';
import { colors } from '../utils/colors';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refPhones: AngularFireList<phones>
  refColors: AngularFireList<colors>

  constructor(private db: AngularFireDatabase) {
    this.refPhones = this.db.list('phones');
    this.refColors = this.db.list('colors');
  }

  getPhones() {
    return this.refPhones;
  }

  getColors() {
    return this.refColors;
  }

  create(phones: phones) {
    return this.refPhones.push(phones);
  }

  update(key: string, data: any) {
    return this.refPhones.update(key, data);
  }

  delete(key: string) {
    return this.refPhones.remove(key);
  }

}
