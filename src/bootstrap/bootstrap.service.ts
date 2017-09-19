import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import 'rxjs/add/operator/toPromise';
import { MapDataClass } from '../classes/MapData';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BootstrapService {
  constructor(private _http: Http) { }

  // getChartData(url: string): Observable<MapDataClass[]> {
  //   return this._http.get(url).
  //   map((response: Response) => <MapDataClass[]> response.json());
  
  // }
  getChartData(url: string): Promise<any> {
    return this._http.get(url)
      .toPromise()
      .then(data => {
        return data.json();
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
}
}
