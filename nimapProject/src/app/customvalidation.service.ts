import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
  MatchPassword(arg0: string, arg1: string): any {
    throw new Error('Method not implemented.');
  }
  patternValidator(): import("@angular/forms").ValidatorFn | null | undefined {
    throw new Error('Method not implemented.');
  }
  userNameValidator: any;

  constructor() { }
}
