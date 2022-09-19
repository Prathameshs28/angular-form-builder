import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormFiledServiceService } from 'src/app/form-filed-service.service';
@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css'],
})
export class FormfieldComponent implements OnInit {
  createForm!: FormGroup;
  flag = true;

  arrayOfField: any[] = [];

  constructor(
    private fb: FormBuilder,
    private formService: FormFiledServiceService
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      label: [''],
      select: [''],
      name: [''],
      option: [''],
    });
  }

  get label() {
    return this.createForm.get('label');
  }

  get select() {
    return this.createForm.get('select');
  }

  get name() {
    return this.createForm.get('name');
  }

  get option() {
    return this.createForm.get('option');
  }

  submit() {
    // this.flag ? this.flag=false : this.flag=true;
    if (this.createForm.value) {
      this.formService.passValue(this.createForm.value);

      this.createForm.reset();
    }

    // this.arrayOfField.push(this.createForm.value);
    // console.log(this.arrayOfField)
  }
}
