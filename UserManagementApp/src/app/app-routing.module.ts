import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {path:'', component:UsersListComponent},
  {path:'register', component:UserRegisterComponent},
  {path:'update/:id', component:UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
