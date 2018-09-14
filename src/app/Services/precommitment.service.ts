import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PcData } from '../Modals/PcData';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PrecommitmentService {

  constructor(private http:HttpClient) { }

  SendApproachingNotification():Observable<any>
  {
    return this.http.get('http://localhost:1041/Precommitment/ApproachingNotification');
  }

  SendPlayerRgNotification():Observable<any>
  {
    return this.http.get('http://localhost:1041/Precommitment/PlayerRgNotification');
  }

  SendLimitReachedNotificationn():Observable<any>
  {
    return this.http.get('http://localhost:1041/Precommitment/LimitReachedNotification');
  }

  SendRelaxNotification():Observable<any>
  {
    return this.http.get('http://localhost:1041/Precommitment/RelaxNotification');
  }

  getPc():Observable<PcData>
  {
    return this.http.get<PcData>('http://localhost:1041/Precommitment/PcData');
  }

  update(pcData:PcData):Observable<any>
  {
    return this.http.put<PcData>('http://localhost:1041/Precommitment/Update',pcData,httpOptions);
  }

}
