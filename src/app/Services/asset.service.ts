import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../Modals/Asset';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http:HttpClient) { }

  getAssets():Observable<Asset[]>
  {
    return this.http.get<Asset[]>('http://localhost:1041/Asset/Assets')
  }

  add(asset:Asset):Observable<any>
  {
      return this.http.put<Asset>('http://localhost:1041/Asset/Add',asset,httpOptions);
  }

  remove(asset:Asset):Observable<any>
  {
      return this.http.put<Asset>('http://localhost:1041/Asset/Remove',asset,httpOptions);
  }

}
