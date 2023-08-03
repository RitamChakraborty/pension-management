import {Injectable} from '@angular/core';
import {LocalStorageKey} from "../../data/enum/local-storage-key";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public get aadharNumber(): number {
    const aadharNumber: string | null = localStorage.getItem(LocalStorageKey.AADHAR_NUMBER);
    return aadharNumber ? parseInt(aadharNumber) : 0;
  }

  public set aadharNumber(aadharNumber: number) {
    localStorage.setItem(LocalStorageKey.AADHAR_NUMBER, aadharNumber.toString());
  }

  public get isAuthenticated(): boolean {
    const isAuthenticated: string | null = localStorage.getItem(LocalStorageKey.IS_AUTHENTICATED);
    return isAuthenticated ? isAuthenticated === 'true' : false;
  }

  public set isAuthenticated(isAuthenticated: boolean) {
    localStorage.setItem(LocalStorageKey.IS_AUTHENTICATED, isAuthenticated ? 'true' : 'false');
  }
}
