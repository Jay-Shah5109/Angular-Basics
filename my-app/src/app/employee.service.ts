import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
  return [
    {"id":1, "name":"Jay","age":45},
    {"id":2, "name":"James","age":35},
    {"id":4, "name":"Ram","age":44},
    {"id":3, "name":"Virat","age":65}
  ];
  }
}
