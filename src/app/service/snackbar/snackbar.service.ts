import {Injectable} from '@angular/core';
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(
    private _snackBar: MatSnackBar
  ) {
  }

  showSnackbar(message: string) {
    this._snackBar.open(
      message,
      "Dismiss",
      {
        duration: 3000
      }
    )
    ;
  }
}
