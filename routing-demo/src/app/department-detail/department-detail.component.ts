import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>
      You selected {{ departmentID }}
    </h2>
    <p>
      <button><a (click)="showOverview()">Overview</a></button> &nbsp;
      <button><a (click)="showContact()">Contact</a></button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button><a (click)="goPrevious()">Previous</a></button> &nbsp;
      <button><a (click)="goNext()">Next</a></button>
    </p>
    <div>
      <button (click)="gotoDepartments()">Back</button>
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
//     this.router.navigate(['/departments',previousID]);
     this.router.navigate(['../',previousID], {relativeTo: this.route});
  }

  goNext() {
      let nextID = this.departmentID+1;
//       this.router.navigate(['/departments',nextID]);
       this.router.navigate(['../',nextID], {relativeTo: this.route});
    }

  gotoDepartments() {
    let selectedID = this.departmentID ? this.departmentID : null;
    //this.router.navigate(['/departments',{id: selectedID, test: "testID"}]); // This was absolute routing path
    this.router.navigate(['../', {id: selectedID}], {relativeTo: this.route}); // Relative routing path
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route}); // Relative routing path
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route}); // Relative routing path
  }

}
