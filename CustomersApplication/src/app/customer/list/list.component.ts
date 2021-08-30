import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data! :string;
  customers: Customer[] = [];

  constructor(public customerservice: CustomerService) { }

  ngOnInit(): void {
  this.loadCustomers();
     
  }

  loadCustomers(){
    this.customerservice.getAll().subscribe((data: Customer[])=>{
      this.customers = data;
    })
  }

  deletePost(customerID: any){
    this.customerservice.deleteCustomerById(customerID).subscribe(data => {
      this.loadCustomers();
    });
  }
  
}
