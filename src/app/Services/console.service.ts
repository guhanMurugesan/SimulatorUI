import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor(private http:HttpClient) { }

  getData():Observable<string>
  {
    return this.http.get('http://localhost:1041/Home/Console',{responseType:'text'});
  }
}
