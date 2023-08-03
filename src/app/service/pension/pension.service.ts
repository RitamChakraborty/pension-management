import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {ProcessPensionResponse} from "../../model/process-pension-response";
import {ProcessPensionRequest} from "../../model/process-pension-request";

@Injectable({
  providedIn: 'root'
})
export class PensionService {
  constructor(
  ) {
  }

  processPension(processPensionRequest: ProcessPensionRequest): Observable<ProcessPensionResponse> {
    return of({
      pensionAmount: 30_000,
      bankServiceCharge: 500
    })
  }
}
