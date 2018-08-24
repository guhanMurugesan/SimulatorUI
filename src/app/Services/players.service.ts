import { Injectable } from '@angular/core';
import { Player } from '../Modals/player';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
    return this.http.get<Player[]>('http://localhost:1041/Player/Players');
  }

  setPlayer(player:Player): Observable<any>
  {
    console.log(player);
    return this.http.put<Player>('http://localhost:1041/Player/UpdatePlayer',player,httpOptions);
  }

}
