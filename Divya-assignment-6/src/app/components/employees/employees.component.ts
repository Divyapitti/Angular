import { Component, OnInit } from '@angular/core';
import { IEmpDetails } from 'src/app/models/emp.model';
import { EmplistService } from 'src/app/services/emplist.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   public empdetail:IEmpDetails[];

  constructor(public empDetail:EmplistService){
    this.empdetail=[];
  }

  public ngOnInit(): void {
    this.empdetail=this.empDetail.getEmpList();
  }
}
