import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { CategoryAddComponent } from './component/category-add/category-add.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { OrdersAddComponent } from './component/orders-add/orders-add.component';
import { OrdersListComponent } from './component/orders-list/orders-list.component';
import { OffersAddComponent } from './component/offers-add/offers-add.component';
import { OffersListComponent } from './component/offers-list/offers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    DashboardComponent,
    ProductAddComponent,
    ProductListComponent,
    CategoryAddComponent,
    CategoryListComponent,
    OrdersAddComponent,
    OrdersListComponent,
    OffersAddComponent,
    OffersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
