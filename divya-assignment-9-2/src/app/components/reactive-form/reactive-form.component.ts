import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/models/formdata.model';
import { IFormData2 } from 'src/app/models/formdata2.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public formData2:IFormData2;

  constructor(private formService:FormService) {
    this.formData2={} as IFormData2
   }

  ngOnInit(): void {
  }

  public OnSubmit():void{
    this.formService.sendReactiveFormDetails(this.formData2).subscribe((res:IFormData2)=>{
      console.log(res,"reactive form");
    })
  }

}
