import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee2.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {
    
   }
  
  public getEmpDetails():Observable<IEmployee>{
    return this.http.get<IEmployee>("http://dummy.restapiexample.com/api/v1/employees");
  }
}
