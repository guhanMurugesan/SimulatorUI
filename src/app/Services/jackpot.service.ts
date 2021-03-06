import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JackpotSlip } from '../Modals/jackpot';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JackpotService {

  constructor(private http:HttpClient) { }

  get():Observable<JackpotSlip>
  {
    return this.http.get<JackpotSlip>('http://localhost:1041/Jackpot/Get');
  }

  Update(jackpotSlip:JackpotSlip):Observable<any>
  {
    return this.http.put<JackpotSlip>('http://localhost:1041/Jackpot/Update',jackpotSlip,httpOptions);
  }

}
