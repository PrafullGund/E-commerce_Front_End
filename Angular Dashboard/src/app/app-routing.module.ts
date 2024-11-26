import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { OrdersListComponent } from './component/orders-list/orders-list.component';
import { OffersListComponent } from './component/offers-list/offers-list.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'product',component:ProductListComponent},
  {path:'category',component:CategoryListComponent},
  {path:'orders',component:OrdersListComponent},
  {path:'offers',component:OffersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
