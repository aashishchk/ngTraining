import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BindingForm } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @ViewChild('f') userForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  addUser(form: NgForm) {
    console.log(form.value);
  }

  patchValue() {
    this.userForm.form.patchValue({
      digital_ids: {
        phone: '111-111-1111'
      }
    });
  }
}
