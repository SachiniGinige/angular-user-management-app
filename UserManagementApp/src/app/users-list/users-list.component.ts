import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
// import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  constructor(private service: UserService, private router: Router) {
    this.LoadUsers();
  }
  userList:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  
  LoadUsers(){
    this.service.GetAll().subscribe(res => {
      if (res) {
        this.userList = res;
        this.dataSource = new MatTableDataSource(this.userList.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(this.userList.data);
      }
    });
  }
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'
  , 'actions'
  ];

  NavigateToUpdate(id: number) {
    this.router.navigate(['./update', id]);
  }

}
