import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeedetails',
  template: `
  <h2>Employee List</h2>
  <h6>{{errorMsg}}</h6>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}->{{employee.name}}->{{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public employees = [] as any;
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees=data,
                      error => this.errorMsg = error);
    }

}
