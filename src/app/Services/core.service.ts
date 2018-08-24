import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../Modals/Config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http:HttpClient) { }

  getConfig():Observable<Config>
  {
    return this.http.get<Config>('http://localhost:1041/Home/Config');
  }

  updateConfig(config: Config): Observable<any>
  {
    return this.http.put<Config>('http://localhost:1041/Home/UpdateConfig',config,httpOptions);
  }

  TurnOn():Observable<any>
  {
    return this.http.get('http://localhost:1041/Home/TurnOn');
  }

  TurnOff():Observable<any>
  {
    return this.http.get('http://localhost:1041/Home/TurnOff');
  }
}
