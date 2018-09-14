import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { System } from '../Modals/System';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http:HttpClient) { }

  getSystemSettings():Observable<System>
  {
    return this.http.get<System>('http://localhost:1041/System/Get');
  }

  UpdateSystemSetting(system:System):Observable<any>
  {
    return this.http.put<System>('http://localhost:1041/System/Update',system,httpOptions);
  }

}
