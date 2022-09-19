import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `<div>
  Welcome {{name}}
  </div>
  <h2>{{2+2}}</h2>
  <h2  [class]=successClass>{{name.length}}</h2>

  <h2>{{name | slice:1:9 | uppercase}}</h2>

  <h2 [class]=successClass class="text-danger" >{{greetUser()}}</h2>

  <h2 [class.text-special]="hasError">Jay Shah</h2>

  <input [id]="id" type="text" value="Jay">
  // <input [disabled]="isDisabled" [id]="id" type="text" value="Jay">

  <h2 [ngClass]="messageClasses">Codevolution</h2>

  <h2 [style.color]="hasError ? 'orange' : 'blue'">Style Binding</h2>

  <h2 [style.color]="highlightColor">Style Binding 2</h2>

  <h2 [ngStyle]="titleStyles">Style Binding 2</h2>
  <br>
 <button (click)="onClick($event)">Greet</button>
 {{greeting}}

 <input #myInput type="text">
 <button (click)="logMessage(myInput.value)">Log</button>

 <input [(ngModel)]="name" type="text">
 {{name}}

 <h2 *ngIf="displayName; else elseBlock">Using ngIf directive</h2>

<ng-template #elseBlock>
 <h2>Name is hidden, since variable is set to false</h2>
 </ng-template>

  <div *ngIf="displayName; then thenBlock; else elseBlock1"></div>

 <ng-template #thenBlock>
  <h2>Then block</h2>
  </ng-template>

  <ng-template #elseBlock1>
   <h2>Hidden block</h2>
   </ng-template>


   <div [ngSwitch]="color">
   <div *ngSwitchCase="'red'">you have picked red color</div>
   <div *ngSwitchCase="'green'">you have picked green color</div>
   <div *ngSwitchCase="'brown'">you have picked brown color</div>
   <div *ngSwitchDefault>No color available</div>
   </div>

   <div *ngFor="let color of colors, first as i">
   <h3>{{i}}-{{color}}</h3>
   </div>

   <h2>Using component interaction here, printing {{myvar}}</h2>

   <button (click)="fireEvent()">Press here for child to parent interaction</button>

   <h4>{{Person | json}}</h4>
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

  public name = "temporary text";
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

  public greeting = "";
  public message = "";
  public displayName=true;

  public highlightColor = "orange";

  public color="sss";

  @Input("parentData") public myvar:any;

  public colors=["red","blue","black","brown"];

  public titleStyles = {
    color: "lightblue",
    fontStyle: "italic"
  }

  public Person = {
    "name":"Jay",
    "lastName":"Shah"
  }

  public successClass = "text-success";

  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("Hey, this is data from child component..");
  }

  constructor() { }

  ngOnInit(): void {
  }

  // function definition
  greetUser() {
    return "Returning from greetUser function:  "+this.name+" and site URL is: "+this.siteURL;
  }

  onClick(event:any) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value:any) {
    console.log(value);
  }

}
