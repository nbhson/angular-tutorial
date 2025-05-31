import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as CryptoJS from 'crypto-js';
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
// require('dotenv').config()

@Injectable({
  providedIn: 'root'
})
export class AppConfigurationProvider {

  // constructor(private http: HttpClient) { }

  // private configPath = 'assets/app.config.json';

  // private configValues: any = null;

  // private configObservable: Observable<any> = this.http
  //   .get(this.configPath)
  //   .pipe(map(
  //     (config: any) =>
  //       JSON.parse(CryptoJS.AES.decrypt(config.data, process.env.ENCRYPTION_KEY as string).toString(CryptoJS.enc.Utf8))
  //   ))
  //   .pipe(shareReplay(1));

  // get config() {
  //   return this.configValues;
  // }

  // public load() {
  //   this.configObservable.subscribe((response: any) => {
  //     this.configValues = response;
  //   });
  // }
}