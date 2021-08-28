import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private crudservice: CrudService, private formBuilder: FormBuilder, private router: Router) { }
  //Add user form actions


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {

      // Initialize Params Object
      var myFormData = new FormData();

      // Begin assigning parameters

      myFormData.append('myUsername', this.registerForm.value.firstname);
      myFormData.append('myEmail', this.registerForm.value.email);

      this.crudservice.addUser(myFormData); //caaling add user service
      this.router.navigate([`/users`]); //after form submit page will redirect to users page

    }
    Swal.fire({
      title: 'Thank you!!',
      text: "Our news letter it's on it's way ",
      icon: 'success'
    });
  }
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

      firstname: ['', [Validators.required]]
    });
  }

}
