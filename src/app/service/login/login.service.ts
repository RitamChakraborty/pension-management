import {Injectable} from '@angular/core';
import {delay, finalize, Observable, of} from "rxjs";
import {LoginRequest} from "../../model/login-request";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {LoadingService} from "../loading/loading.service";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(
        private _localStorageService: LocalStorageService,
        private _loadingService: LoadingService
    ) {
    }

    login(loginRequest: LoginRequest): Observable<boolean> {
        const result: boolean = loginRequest.password === 'password';
        this._localStorageService.aadharNumber = parseInt(loginRequest.aadharNumber);
        this._localStorageService.isAuthenticated = result;
        this._loadingService.isLoading.next(true);
        return of(result)
            .pipe(
                delay(1000),
                finalize(() => this._loadingService.isLoading.next(false))
            );
    }
}
