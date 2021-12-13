import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button'; 
import {  MatTableModule  } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './core/views/login-view/login-view.component';
import { DashboardComponent } from './core/views/dashboard/dashboard.component';
import { BusinessComponent } from './core/views/business/business.component';
import { OrdersComponent } from './core/views/orders/orders.component';
import { DeliverComponent } from './core/views/deliver/deliver.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { TablesViewComponent } from './core/views/tables-view/tables-view.component';
import { AcceptedDeliversManComponent } from './core/views/accepted-delivers-man/accepted-delivers-man.component';
import { WaitingDeliversManComponent } from './core/views/waiting-delivers-man/waiting-delivers-man.component';
import { AllOrdersComponent } from './core/views/all-orders/all-orders.component';
import { WaitingOrdersComponent } from './core/views/waiting-orders/waiting-orders.component';
import { NavLinkComponent } from './core/components/nav-link/nav-link.component';
import { OrderOptionComponent } from './core/components/order-option/order-option.component';
import { MotoButtonComponent } from './core/components/moto-button/moto-button.component';
import { UserComponent } from './core/components/user/user.component';
import { AssignedDeliveryComponent } from './core/components/assigned-delivery/assigned-delivery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    DashboardComponent,
    BusinessComponent,
    OrdersComponent,
    DeliverComponent,
    HeaderComponent,
    SidenavComponent,
    TablesViewComponent,
    AcceptedDeliversManComponent,
    WaitingDeliversManComponent,
    AllOrdersComponent,
    WaitingOrdersComponent,
    NavLinkComponent,
    OrderOptionComponent,
    MotoButtonComponent,
    UserComponent,
    AssignedDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
