import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>
      You selected {{ departmentID }}
    </h2>
    <button><a (click)="goPrevious()">Previous</a></button> &nbsp;
    <button><a (click)="goNext()">Next</a></button>

    <div>
      <button (click)="gotoDepartments(
      )">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    //let id: Number = parseInt(this.route.snapshot.params['id']);
    //this.departmentID=id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentID=id;
    });
  }

  goPrevious() {
    let previousID = this.departmentID-1;
    this.router.navigate(['/departments',previousID]);
  }

  goNext() {
      let nextID = this.departmentID+1;
      this.router.navigate(['/departments',nextID]);
    }

  gotoDepartments() {
    let selectedID = this.departmentID ? this.departmentID : null;
    this.router.navigate(['/departments',{id: selectedID, test: "testID"}]);
  }

}
