import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators , } from '@angular/forms';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  countries: string[] = ['USA', 'Canada', 'UK', 'Australia', 'Germany','india'];
  state: string[] =['Maharashtra','Gujrat','Goa','Sambhajinagar','Gondiya','Gadchiroli','Nashik'];
  registrationForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm= this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(18)]],
        emailId: ['', [Validators.required, Validators.email]],
        age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
        addressType: ['', Validators.required],
        address: ['', Validators.required],
        country: ['', Validators.required] ,
        State:['',Validators.required]
      })
  }
  getImage(eve:any) {
    console.log(eve.target.files[0]);
 }
 Submit() {
  if (this.registrationForm.valid) {
    console.log('Register successfully!');
    console.log(this.registrationForm.value);
  } else {
    console.log('Enter Valid details!!');
  }

}
}
