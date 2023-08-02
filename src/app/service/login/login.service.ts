import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {JWTToken} from "../../model/jwttoken";
import {LoginRequest} from "../../model/login-request";
import Logger from "js-logger";
import {JwtService} from "../jwt/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(loginRequest: LoginRequest): Observable<boolean> {
    const result: boolean = loginRequest.password === 'password';
    return of(result);
  }
}
