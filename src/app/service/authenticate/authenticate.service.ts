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
  private _pensioner?: Pensioner;

  constructor(
    _localStorageService: LocalStorageService,
    private _router: Router,
    private _snackBarService: SnackbarService
  ) {
    this._pensioner = {
      aadharNumber: _localStorageService.aadharNumber,
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
    }
  }

  get pensioner(): Pensioner | undefined {
    return this._pensioner;
  }

  authenticate(): Observable<boolean> {
    return of(false);
  }

  logout() {
    this._pensioner = undefined;
    this._router.navigate(['login']);
    this._snackBarService.showSnackbar("You're logged out");
  }
}
