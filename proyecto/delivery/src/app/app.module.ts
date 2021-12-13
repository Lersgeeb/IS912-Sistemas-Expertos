import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from "@angular/material/dialog";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NavbarItemComponent } from './core/components/navbar/navbar-item/navbar-item.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { UserAccessComponent } from './views/user-access/user-access.component';
import { OrdersComponent } from './views/orders/orders.component';
import { DeliveryOrdersComponent } from './views/delivery-orders/delivery-orders.component';
import { OrderInvoiceComponent } from './views/order-invoice/order-invoice.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { HeaderComponent } from './core/components/header/header.component';
import { OrdersListComponent } from './core/components/orders-list/orders-list.component';
import { DeliveryOrdersListComponent } from './core/components/delivery-orders-list/delivery-orders-list.component';
import { OrderOptionComponent } from './core/components/order-option/order-option.component';
import { DeliveryOrderOptionComponent } from './core/components/delivery-order-option/delivery-order-option.component';
import { BackButtonComponent } from './core/components/back-button/back-button.component';
import { InvoiceComponent } from './core/components/invoice/invoice.component';
import { LocationInfoComponent } from './core/components/location-info/location-info.component';
import { OrderPickedInvoiceComponent } from './views/order-picked-invoice/order-picked-invoice.component';
import { ProcessStepComponent } from './core/components/process-step/process-step.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavLinkComponent } from './core/components/nav-link/nav-link.component';
import { MapsComponent } from './core/components/maps/maps.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LandingPageComponent,
    UserAccessComponent,
    OrdersComponent,
    DeliveryOrdersComponent,
    OrderInvoiceComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    OrdersListComponent,
    DeliveryOrdersListComponent,
    OrderOptionComponent,
    DeliveryOrderOptionComponent,
    BackButtonComponent,
    InvoiceComponent,
    LocationInfoComponent,
    OrderPickedInvoiceComponent,
    ProcessStepComponent,
    FooterComponent,
    NavLinkComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
