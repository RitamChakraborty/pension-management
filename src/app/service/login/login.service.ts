import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {LoginRequest} from "../../model/login-request";
import {LocalStorageService} from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _localStorageService: LocalStorageService) {
  }

  login(loginRequest: LoginRequest): Observable<boolean> {
    const result: boolean = loginRequest.password === 'password';
    this._localStorageService.aadharNumber = parseInt(loginRequest.aadharNumber);
    this._localStorageService.isAuthenticated = result;
    return of(result)
      .pipe(delay(1000));
  }
}
