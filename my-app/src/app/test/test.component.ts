import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>
  Welcome {{name}}
  </div>
  <h2>{{2+2}}</h2>
  <h2  [class]=successClass>{{name.length}}</h2>
  
  <h2>{{name.toUpperCase()}}</h2>
  
  <h2 [class]=successClass class="text-danger" >{{greetUser()}}</h2>

  <h2 [class.text-special]="hasError">Jay Rohit Shah</h2>

  <input [id]="id" type="text" value="Jay">
  // <input [disabled]="isDisabled" [id]="id" type="text" value="Jay">

  <h2 [ngClass]="messageClasses">Codevolution</h2>

  <h2 [style.color]="hasError ? 'orange' : 'blue'">Style Binding</h2>

  <h2 [style.color]="highlightColor">Style Binding 2</h2>

  <h2 [ngStyle]="titleStyles">Style Binding 2</h2>
  `,
  styles:[`
    .text-success {
      color:green;
    }
    .text-danger {
      color:red;
    }
    .text-special {
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Jay Shah";
  public id = "abc123";
  public isDisabled = true;
  public siteURL = window.location.href;
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";

  public titleStyles = {
    color: "lightblue",
    fontStyle: "italic"
  }

  public successClass = "text-success";
  constructor() { }

  ngOnInit(): void {
  }

  // function definition
  greetUser() {
    return "Returning from greetUser function:  "+this.name+" and site URL is: "+this.siteURL;
  }

}
