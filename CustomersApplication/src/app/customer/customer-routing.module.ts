import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: ListComponent, pathMatch: 'full'},
  { path: 'customer/:customerId/view', component: ViewComponent },
  { path: 'customer/create', component: CreateComponent },
  { path: 'customer/:customerId/update', component: UpdateComponent },
  { path: '*',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
