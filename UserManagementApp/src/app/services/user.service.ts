import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl:string = 'https://reqres.in/api/users'

  constructor(private http:HttpClient) { };
    
    
    GetAll(){
      return this.http.get(this.apiurl);
    };

    GetById(id:number){
      return this.http.get(this.apiurl+'/'+id);
    };

    Register(inputData:any){
      return this.http.post(this.apiurl, inputData);
    };

    UpdateById(id:number, inputData:any){
      return this.http.patch(this.apiurl+'/'+id, inputData);
    };

    DeleteById(id:number){
      return this.http.delete(this.apiurl+'/'+id);
    };
  
}
