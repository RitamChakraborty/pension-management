import {Injectable} from '@angular/core';
import {BehaviorSubject, delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoading(): Observable<boolean> {
    return this._isLoading
      .pipe(delay(1000));
  }
}
