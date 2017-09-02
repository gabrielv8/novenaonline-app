import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EstoqueProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EstoqueProvider {

  base_url: string = "http://estoquemotors.com.br/api";

  constructor(public http: Http) {
    console.log('Hello EstoqueProvider Provider');
  }

  getMarcas() {
    return this.http.get(this.base_url + "/getmarcas/carros");
  }
}
