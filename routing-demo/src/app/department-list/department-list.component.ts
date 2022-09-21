import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
   <h3>
         Department List
       </h3>
       <ul class="items">
         <li (click)="onSelect(department)" *ngFor="let department of departments">
           <button><span class="badge">{{department.id}}</span> {{department.name}}</button>
         </li>
     </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor(private router : Router) { }

  departments=[
  {"id":1, "name":"Angular"},
  {"id":2, "name":"Bootstrap"},
  {"id":3, "name":"Java"},
  {"id":4, "name":"Node"},
  {"id":5, "name":"Javascript"}
  ]

  ngOnInit(): void {
  }

  onSelect(department) {
    this.router.navigate(['/departments',department.id]);
  }

}
