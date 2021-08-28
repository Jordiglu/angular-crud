import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData: any;
  constructor(private http: HttpClient) { }
  //get all users  details
  public getUsers() {

    return this.http.get('http://localhost/users.php');
  }
  //add new user    
  public addUser(userData) {
    return this.http.post('http://localhost/users.php/'
      , userData).subscribe((res: Response) => {
        this.getUsers();
      });
  }

  //delete user
  public deleteUser(userid) {
    return this.http.post('http://localhost/users.php/'
      , userid).subscribe((res: Response) => { });
  }

}