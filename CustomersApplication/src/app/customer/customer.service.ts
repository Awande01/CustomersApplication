import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Types } from './types';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private apiurl ="https://localhost:44392/";


constructor(private httpclient : HttpClient) { }

getAll(): Observable<Customer[]>{
return this.httpclient.get<Customer[]>(this.apiurl + 'GetAll');
}

create(customer: Customer): Observable<Customer> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.httpclient.post<Customer>(this.apiurl + 'Add',  
  customer, httpOptions);  
}

updateCustomer(customer: Customer): Observable<Customer> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.httpclient.put<Customer>(this.apiurl + 'Update',  
  customer, httpOptions);  
}  
deleteCustomerById(customerId: number): Observable<number> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.httpclient.delete<number>(this.apiurl + 'Delete?customerID=' +customerId,  
httpOptions);  
} 
getCustomerByID(customerId: number): Observable<Customer>{
  return this.httpclient.get<Customer>(this.apiurl + 'GetByID?customerID=' + customerId);
}
getTypes():Observable<Types[]>{
  return this.httpclient.get<Types[]>(this.apiurl +'GetTypes');
}
}
