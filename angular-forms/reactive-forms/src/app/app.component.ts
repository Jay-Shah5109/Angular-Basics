import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-forms';
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  get email() {
      return this.registrationForm.get('email');
  }

  get userName() {
      return this.registrationForm.get('userName');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(' '));
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {

    // Using formBuilder in the below code to populate values
    this.registrationForm=this.fb.group({
              userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
              password: [''],
              confirmPassword: [''],
              email: [''],
              subscribe: [false],
              address: this.fb.group(
                {
                  city: ['Mumbai'],
                  state: ['Maharashtra'],
                  postalCode: ['123545']
                }),
              alternateEmails: this.fb.array([])
    }, {validator: passwordValidator});

    // Below code is for enabling the email field if the checkbox is ticked
    this.registrationForm.get('subscribe')!.valueChanges
        .subscribe(checkedValue => {
            const email = this.registrationForm.get('email');
            if(checkedValue) {
              email!.setValidators(Validators.required);
            } else {
              email!.clearValidators();
            }
            email!.updateValueAndValidity();
            });
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
