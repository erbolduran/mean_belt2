import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Appmnt } from './appmnt';

@Injectable()
export class AppmntService {
  appmnts: Appmnt = new Appmnt();
  appmntes: Appmnt[] = [];

  constructor(
    private _http: Http
  ) { }

  createAppmnt(appmnt: Appmnt, callback, errorback) {
    console.log(appmnt)
    this._http.post('/appmnts', appmnt).subscribe(
      (res) => {
        const appmint = res.json();
        console.log(appmint);    
        callback(appmint)    
      },
      (err) => {
        errorback(err)
      }
    );
  }

  getAppmnts(callback, errorback) {
    this._http.get('/appmnts').subscribe(
      (res) => {
        const appmint = res.json();
        this.appmntes = appmint
        callback(this.appmntes)
      },
      (err) => {
        errorback(err)
      }
    );
  }

}
