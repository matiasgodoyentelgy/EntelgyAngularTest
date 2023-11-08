import { Injectable } from '@angular/core';
import { User } from './user.model';
import { of } from 'rxjs';

const userBack = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'juanito.perez@mail.com',
    password: 'Juan1234'
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  register(user: User){
    return of (user.email == userBack.email  ? "Error: Email in use" : "Correct!");
  }
}
