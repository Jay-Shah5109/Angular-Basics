import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeedetails',
  template: `
  <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}->{{employee.name}}->{{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public employees = [] as any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}
