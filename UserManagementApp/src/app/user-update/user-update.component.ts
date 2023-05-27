import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {

  updateId:number=0;
  updatedUser:any;
  updatedUserData:any;
  updateForm:any;
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService, 
    private service: UserService, private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.updateId = +params['id']; // "+" is used to convert the string to a number if needed
      this.LoadUserById();
      
    });
  }

  async LoadUserById(){
    this.service.GetById(this.updateId).subscribe(res => {
      if (res) {
        this.updatedUser = res;
        this.updatedUserData = this.updatedUser.data;
        this.updateForm = this.formBuilder.group({
          id:this.updatedUserData.id,
          fname: this.updatedUserData.first_name,
          lname: this.updatedUserData.last_name,
          email: this.updatedUserData.email,
          avatar: this.updatedUserData.avatar,
        });
        // console.log(this.updatedUser.data);
      }
    });
  }

  UpdateUser(){

    if(this.updateForm.valid){
      this.service.UpdateById(this.updateId,this.updateForm.value).subscribe(res =>{
        this.toastr.success('User updated successfully!');
        // console.log(res);
        this.router.navigate(['']);
      });  
      
    }
    else{
      this.toastr.warning('Please check form input to proceed');
    }
  }
}
