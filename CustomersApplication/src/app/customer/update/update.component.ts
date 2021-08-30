import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Customer } from '../customer';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Types } from '../types';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

customerid! : number;
customer!: Customer;
form!: FormGroup;
types: Types[] = [];

  constructor(
    public customerservice: CustomerService,
    private route: ActivatedRoute,
    private router: Router   
    ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      customerID : new FormControl('',Validators.required),
      firstName : new FormControl('',Validators.required),
      surname : new FormControl('',Validators.required),
      fK_TypeID : new FormControl('',Validators.required),
      emailAddress : new FormControl('',Validators.required),
      cellphone : new FormControl('',Validators.required),
      amount : new FormControl('',Validators.required),
    });
    this.getTypes();
    this.customerid = this.route.snapshot.params['customerId'];
    this.customerservice.getCustomerByID(this.customerid).subscribe((data: Customer) =>{
    this.customer = data;
    });
  }

  getTypes(){
    this.customerservice.getTypes().subscribe((data: Types[]) =>{
      this.types = data;
    });
    }
  submit(){
  this.customerservice.updateCustomer(this.customer).subscribe(data =>{
    this.router.navigateByUrl('');
  })
}

}
