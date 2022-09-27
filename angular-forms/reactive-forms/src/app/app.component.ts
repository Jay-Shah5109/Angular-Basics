import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  registrationForm=new FormGroup(
    {
      userName: new FormControl('Jay Shah'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup(
        {
          city: new FormControl(''),
          state: new FormControl(''),
          postalCode: new FormControl('')
        })
    }
  );

  loadAPIData() {
//   The setValue method works strictly to populate all the values in the form compulsorily, instead use patchValue method
// so that, all values in the form is not required to be instantiated from start
//     this.registrationForm.setValue({
//
//       userName: 'Jay Shah',
//           password: 'test',
//           confirmPassword: 'test',
//           address:
//             {
//               city: 'Mumbai',
//               state: 'Maharashtra',
//               postalCode: '12456'
//             }
//
//     });

this.registrationForm.patchValue({
      userName: 'Jay Shah',
          password: 'test',
          confirmPassword: 'test'
    });
  }
}
