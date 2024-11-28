import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { OffersListComponent } from './component/offers-list/offers-list.component';
import { OrdersListComponent } from './component/orders-list/orders-list.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'menu', component: MenubarComponent },
  { path: 'category', component: CategoryListComponent }, 
  {path:'offers',component:OffersListComponent},
  {path:'orders',component:OrdersListComponent},
  {path:'product',component:ProductListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
