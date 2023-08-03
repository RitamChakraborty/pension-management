import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Pensioner} from "../../model/pensioner";
import {Router} from "@angular/router";
import {SnackbarService} from "../snackbar/snackbar.service";
import {LocalStorageService} from "../local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router,
    private _snackBarService: SnackbarService
  ) {
  }

  get pensioner(): Pensioner {
    return {
      aadharNumber: this._localStorageService.aadharNumber,
      pan: 'ABCDE1234F',
      name: 'Ritam Chakraborty',
      dateOfBirth: '2023-06-04',
      salaryEarned: 60_000,
      allowances: 5_000,
      pensionType: 'Personal',
      bankDetails: {
        bankName: 'HSBC',
        bankType: 'Private',
        accountNumber: 1234567890,
      }
    };
  }

  authenticate(): Observable<boolean> {
    return of(this._localStorageService.isAuthenticated);
  }

  logout() {
    this._localStorageService.isAuthenticated = false;
    this._localStorageService.clearAadharNumber();
    this._router.navigate(['login']);
    this._snackBarService.showSnackbar("You're logged out");
  }
}
