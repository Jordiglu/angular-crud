import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  data = [];
  constructor(private crudservice: CrudService) {
    this.loadData();
  }
  //Get all users data
  loadData() {
    //Get all usera details  
    this.crudservice.getUsers().subscribe((res: any[]) => {

      this.data = res;
    });
  }
  //Delete User
  deleteUser(id) {
    if (confirm("Are you sure to delete?")) {
      // Initialize Params Object
      var myFormData = new FormData();


      // Begin assigning parameters
      myFormData.append('deleteid', id);
      this.crudservice.deleteUser(myFormData);
      //sweetalert message popup
      Swal.fire({
        title: 'Hurray!!',
        text: "User has been deleted successfully",
        icon: 'success'
      });
      this.loadData();
    }
  }
  ngOnInit(): void {
  }
}

