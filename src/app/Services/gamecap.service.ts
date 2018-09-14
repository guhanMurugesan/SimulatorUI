import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Gamecap } from '../Modals/gamecap';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GamecapService {

  constructor(private http:HttpClient) { }

  get():Observable<Gamecap>
  {
    return this.http.get<Gamecap>('http://localhost:1041/Gamecap/Get');
  }

  Update(gamecap:Gamecap):Observable<any>
  {
    return this.http.put<Gamecap>('http://localhost:1041/Gamecap/Update',gamecap,httpOptions);
  }

}
