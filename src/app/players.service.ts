import { Injectable } from '@angular/core';
import { Player } from './Modals/player';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http:HttpClient) { }

  Players : Player[] = [
          {id: 512, name:"guhan"}
  ];

  getPlayers(): Observable<Player[]> 
  {
    return this.http.get<Player[]>('http://localhost:1041/Player/Players',httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
