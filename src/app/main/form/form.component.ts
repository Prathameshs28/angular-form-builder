import { Component, OnInit } from '@angular/core';
import { FormFiledServiceService } from 'src/app/form-filed-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formData!: any;
  btnFlag = false;
  dataArray: any[] = [];

  formShow!: FormGroup;

  optArray: any[] = [];
  checkArray: any[] = [];
  radioArray: any[] = [];
  constructor(
    private service: FormFiledServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.service.formSubject.subscribe((data: any) => {
      this.formData = JSON.stringify(data);
      this.formData = JSON.parse(this.formData);

      this.dataArray.push(this.formData);

      // console.log(this.formData.label)
      // console.log(this.formData.select)

      // console.log(this.formData.option)
      if (this.formData.option && this.formData.select == 'Select') {
        this.optArray = this.formData.option.split(',');
      }

      // console.log(this.formData.option);

      if (this.formData.option && this.formData.select == 'Checkbox') {
        this.checkArray = this.formData.option.split(',');
      }
      // console.log(this.formData.option);
      if (this.formData.option && this.formData.select == 'Radios') {
        this.radioArray = this.formData.option.split(',');
      }

      console.log(this.formData.option);

      // console.log(this.formData);
    });
  }
}
