import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
    private service: UserService, private router:Router) {
    }

  regForm = this.formBuilder.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, 
      // Password Pattern => At least 8 characters long, Contains at least one uppercase letter,      
      // Contains at least one lowercase letter, Contains at least one digit, May contain special characters
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d@$!%*?&].{8,}'),
      // Password Pattern => At least 8 characters long
      // Validators.pattern('^.{8,}$'),
    ]],
  });

  RegisterUser(){

    if(this.regForm.valid){
      this.service.Register(this.regForm.value).subscribe(res =>{
        this.toastr.success('User registered successfully!');
        // console.log(res);
        this.router.navigate(['']);
      });  
      
    }
    else{
      this.toastr.warning('Please check form input to proceed');
      // console.log(this.regForm.valid,this.regForm);
    }
  }
}
