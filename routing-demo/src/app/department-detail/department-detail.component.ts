import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>
      You selected {{ departmentID }}
    </h2>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id: Number = parseInt(this.route.snapshot.params['id']);
    this.departmentID=id;
  }

}
