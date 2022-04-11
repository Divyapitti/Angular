import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/models/formdata.model';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  public formData:IFormData;
  // public display:string;

  constructor(private formService:FormService) {
    this.formData={} as IFormData;
    // this.display='none';
   }

  ngOnInit(): void {
  }
  // public OnSubmit():void{
  //   this.display="block";
  // }
  public OnSubmit():void{
    this.formService.sendTemplateFormDetails(this.formData).subscribe((res:IFormData)=>{
      console.log(res,"template form");
    })
  }



}
