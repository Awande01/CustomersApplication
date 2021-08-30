import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Types } from '../types';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  types: Types[] = [];

  constructor(
    public customerservice: CustomerService,
     private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      surname :new FormControl('', [Validators.required]),
      fK_TypeID : new FormControl('', [Validators.required]),
      emailAddress :new FormControl('', [Validators.required]),
      cellphone :new FormControl('', [Validators.required]),
      amount :new FormControl('', [Validators.required]),
    })
    this.getTypes();
  }

  getTypes(){
  this.customerservice.getTypes().subscribe((data: Types[]) =>{
    this.types = data;
  });
  }
  
  submit(){
    console.log(this.form.value);
    this.customerservice.create(this.form.value).subscribe(data =>{
      this.router.navigateByUrl('')
    })
}
}