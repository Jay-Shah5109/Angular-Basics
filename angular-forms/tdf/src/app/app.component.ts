import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Java','Python'];
  topicHasError=true;
  userModel=new User('','jay@test.com',4567812345,'default','morning',true);

  constructor(private _enrollmentservice: EnrollmentService) {

  }

  validateTopic(value: any) {
    if(value === 'default') {
      this.topicHasError=true;
    } else {
      this.topicHasError=false;
    }
  }

  onSubmit() {
//     console.log(this.userModel);
  this._enrollmentservice.enroll(this.userModel).subscribe(
    data => console.log('Success!', data);
    error => console.log('Error!', error);
    )
  }
}
