import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { phones } from 'src/app/utils/phones';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  newPhone: phones = {
    comment: { text: ''}
  };

  constructor(private bs: BaseService) { }

  addPhone(newPhone: phones) {
    this.bs.create(newPhone).then(() => {
      console.log('Sikeresen hozzáadtad!');
    })
  }

}
