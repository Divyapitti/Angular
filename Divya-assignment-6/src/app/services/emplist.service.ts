import { Injectable } from '@angular/core';
import { IEmpDetails } from '../models/emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmplistService {

  constructor() { }

  public getEmpList():IEmpDetails[]{
    return [{
      Employee_ID: 1,
      First_Name: "Hanvesh",
      Last_Name: "Gowda",
      Email: "liki18@yahoo.com",
      Salary:100000,
      DOB:"01/1 1/2000"
    },
    {
      Employee_ID: 2,
      First_Name: "milky",
      Last_Name: "Ballmer",
      Email: "lucyb56@gmail.com",
      Salary:20000,
      DOB:"07/04/1992"
    },
    {
      Employee_ID: 3,
      First_Name: "Anna",
      Last_Name: "Smith",
      Email: "annasmith23@gmail.com",
	   Salary:15000,
 	    DOB:"01/03/1993"
    },
    {
      Employee_ID: 4,
      First_Name: "Robert",
      Last_Name: "Brown",
      Email: "bobbrown432@yahoo.com",
	   Salary:25000,
	   DOB:"04/02/1994"
    },
    {
      Employee_ID: 5,
      First_Name: "Roger",
      Last_Name: "Waltz",
      Email: "rogerwatlz12@yahoo.com",
	    Salary:10000,
 	    DOB:"01/01/1995"
    }]
  }
}
