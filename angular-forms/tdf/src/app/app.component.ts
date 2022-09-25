import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Java','Python'];
  topicHasError=true;
  userModel=new User('','jay@test.com',4567812345,'default','morning',true);

  validateTopic(value: any) {
    if(value === 'default') {
      this.topicHasError=true;
    } else {
      this.topicHasError=false;
    }
  }
}
