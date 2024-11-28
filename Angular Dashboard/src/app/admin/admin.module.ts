import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { OffersAddComponent } from './component/offers-add/offers-add.component';
import { OffersListComponent } from './component/offers-list/offers-list.component';
import { OrdersAddComponent } from './component/orders-add/orders-add.component';
import { OrdersListComponent } from './component/orders-list/orders-list.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenubarComponent } from './component/menubar/menubar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryAddComponent,
    CategoryListComponent,
    OffersAddComponent,
    OffersListComponent,
    OrdersAddComponent,
    OrdersListComponent,
    ProductAddComponent,
    ProductListComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ]
})
export class AdminModule { }
