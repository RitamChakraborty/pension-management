import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {ProcessPensionResponse} from "../../model/process-pension-response";

@Injectable({
  providedIn: 'root'
})
export class PensionService {
    processPension(): Observable<ProcessPensionResponse> {
    return of({
      pensionAmount: 30_000,
      bankServiceCharge: 500
    })
  }
}
