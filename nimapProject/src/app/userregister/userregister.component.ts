import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
 
  RegisterForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.RegisterForm= this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.formBuilder.group({
        email: [''],
        contct:[''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    });
  }
  getImage(eve:any) {
    console.log(eve.target.files[0]);
 }

 
}

