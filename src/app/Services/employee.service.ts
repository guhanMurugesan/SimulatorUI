import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Modals/Employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployee():Observable<Employee[]>
  {
    return this.http.get<Employee[]>('http://localhost:1041/Employee/Get');
  }

  add(employee:Employee):Observable<any>
  {
      return this.http.put<Employee>('http://localhost:1041/Employee/Add',employee,httpOptions);
  }

  remove(employee:Employee):Observable<any>
  {
      return this.http.put<Employee>('http://localhost:1041/Employee/Remove',employee,httpOptions);
  }

}


