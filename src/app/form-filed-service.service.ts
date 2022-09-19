import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormfieldComponent } from './main/formfield/formfield.component';
@Injectable({
  providedIn: 'root',
})
export class FormFiledServiceService {
  public formSubject: any = new Subject();

  constructor() {}

  passValue(data: any) {
    this.formSubject.next(data);
  }

}
