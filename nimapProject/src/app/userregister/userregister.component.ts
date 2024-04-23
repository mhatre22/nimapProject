import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators ,} from '@angular/forms';


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
 

 
    
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit():void {
      this.registrationForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        // Add more fields with required validation as needed
      });
    }
  
    onSubmit() {
      if (this.registrationForm.valid) {
        console.log(this.registrationForm.value);
        // Handle form submission
      }
    }
  }
