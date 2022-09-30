import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  constructor(private fb: FormBuilder) {

  }

  get userName() {
    return this.registrationForm.get('userName');
  }


//  Commented below code, and used formBuilder in place of FormControl and FormGroup
//   registrationForm=new FormGroup(
//     {
//       userName: new FormControl('Jay Shah'),
//       password: new FormControl(''),
//       confirmPassword: new FormControl(''),
//       address: new FormGroup(
//         {
//           city: new FormControl(''),
//           state: new FormControl(''),
//           postalCode: new FormControl('')
//         })
//     }
//   );

// Using formBuilder in the below code to populate values

registrationForm=this.fb.group({

          userName: ['', [Validators.required, Validators.minLength(3)]],
          password: [''],
          confirmPassword: [''],
          address: this.fb.group(
            {
              city: ['Mumbai'],
              state: ['Maharashtra'],
              postalCode: ['123545']
            })

});

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
