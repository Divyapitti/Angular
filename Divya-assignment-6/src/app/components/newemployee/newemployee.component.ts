import { Component, OnInit } from '@angular/core';
import { IEmp, IEmployee } from 'src/app/models/employee2.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
  public employees:IEmp[];

  constructor(public empService:EmployeesService) {
    this.employees=[];
   }

  public ngOnInit(): void {
    this.initialemp();
    
  }
  public initialemp():void{
    this.empService.getEmpDetails().subscribe((response:IEmployee)=>{
      this.employees = response.data;
    })
  }

}
