import { Component, OnInit } from '@angular/core';

// Manual imports
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(public form: FormBuilder) { 
    this.employeeForm = this.form.group({
      name:[''],
      email:['']
    });
  }

  ngOnInit(): void {
  }

  sendData(): any {
    console.log("You clicked me!");
    console.log(this.employeeForm.value);
  }

}
