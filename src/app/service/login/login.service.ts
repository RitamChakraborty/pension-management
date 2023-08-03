import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {LoginRequest} from "../../model/login-request";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(loginRequest: LoginRequest): Observable<boolean> {
    const result: boolean = loginRequest.password === 'password';
    return of(result);
  }
}
