import { Component } from '@angular/core';
import { phones } from 'src/app/utils/phones';
import { colors } from 'src/app/utils/colors';
import { BaseService } from 'src/app/services/base.service';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  phones?: phones[];
  colors?: colors[];
  searchText: string = "";

  constructor(private bs: BaseService) {
    this.bs.getPhones().snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.phones = data;
      console.log(this.phones)
    })

    this.bs.getColors().snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(data => {
      this.colors = data;
      console.log(this.colors);
    })
  }

  matchColors(key: string | undefined) {
    return this.colors?.find((k: any) =>{
      return k.key == key;
    })
  }

  deletePhones(phones: phones) {
    if (phones.key) {
      this.bs.delete(phones.key).then(() => {
        console.log('Sikeresen törölve!')
      })
    }
  }

  updatePhones(phones: phones) {
    const data = phones;
    if (phones.key) {
      this.bs.update(phones.key, data).then(() => {
        console.log('Sikeresen frissítetted!')
      })
    }
  }

}
