import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  userForm: FormGroup = null;
  ConfirmpasswordControl=null;

  EmailRegExValid: RegExp = /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  



  constructor() { 
    this.userForm = new FormGroup({
      nickname:new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      email_address: new FormControl('',Validators.pattern(this.EmailRegExValid)),
      password: new FormControl('',Validators.compose([Validators.minLength(8),Validators.required])),
      age: new FormControl(false,Validators.requiredTrue)
    })

    
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.userForm.value.password);
  }


}
