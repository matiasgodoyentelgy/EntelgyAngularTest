import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user.model';

class SimpleFormModel {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  password2!: string;
  acceptTerms!: boolean;
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  simpleForm!: SimpleFormModel;
  showErrors = false;
  serviceResponse = '';

  constructor(private _loginService: LoginService) {
    this.simpleForm = new SimpleFormModel();
  }

  saveForm(form: NgForm) {
    this.showErrors = false;
    if (form.invalid) {
      this.showErrors = true;
      return;
    }    

    let user: User = {
      firstName: this.simpleForm.firstName ? this.simpleForm.firstName : '',
      lastName: this.simpleForm.lastName ? this.simpleForm.firstName : '',
      email: this.simpleForm.email,
      password: this.simpleForm.password
    }
    this._loginService.register(user).subscribe((result) => {
      this.serviceResponse = result;
    })
  }

}
