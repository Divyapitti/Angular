import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFormData } from '../models/formdata.model';
import { Observable } from 'rxjs';
import { IFormData2 } from '../models/formdata2.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { 
    
  }

  public sendTemplateFormDetails(formData:IFormData):Observable<IFormData>{
    return this.http.post<IFormData>('http://localhost:3000/template-form',formData)
  }

  public sendReactiveFormDetails(formData:IFormData2):Observable<IFormData2>{
    return this.http.post<IFormData2>('http://localhost:3000/reactive-form',formData)
  }
  
}
