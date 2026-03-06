import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedUiService {

  commonData: any = {
    appName: 'Angular 19'
  };

  constructor() { }
}
