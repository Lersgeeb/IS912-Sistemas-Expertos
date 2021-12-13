import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NavbarItemComponent } from './core/components/navbar/navbar-item/navbar-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './core/views/landing-page/landing-page.component';
import { CategoriesComponent } from './core/views/categories/categories.component';
import { CartComponent } from './core/views/cart/cart.component';
import { UserAccessComponent } from './core/views/user-access/user-access.component';
import { CommercialInvoiceComponent } from './core/views/commercial-invoice/commercial-invoice.component';
import { DataInvoiceComponent } from './core/views/data-invoice/data-invoice.component';
import { BusinessComponent } from './core/views/business/business.component';
import { BusinessProductsComponent } from './core/views/business-products/business-products.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PopularBusinessComponent } from './core/components/popular-business/popular-business.component';
import { CategoryComponent } from './core/components/category/category.component';
import { StepsComponent } from './core/components/steps/steps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { BusinessOptionComponent } from './core/components/business-option/business-option.component';
import { BackButtonComponent } from './core/components/back-button/back-button.component';
import { OrdersComponent } from './core/components/orders/orders.component';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { OrderComponent } from './core/components/order/order.component';
import { InvoiceComponent } from './core/components/invoice/invoice.component';
import { InvoiceStateComponent } from './core/views/invoice-state/invoice-state.component';
import { OrderCartComponent } from './core/components/order-cart/order-cart.component';
import { ProcessStepComponent } from './core/components/process-step/process-step.component';
import { NavLinkComponent } from './core/components/nav-link/nav-link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AmountInputModalComponent } from './core/modal/amount-input-modal/amount-input-modal.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './core/components/map/map.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    LandingPageComponent,
    CategoriesComponent,
    CartComponent,
    UserAccessComponent,
    CommercialInvoiceComponent,
    DataInvoiceComponent,
    BusinessComponent,
    BusinessProductsComponent,
    HeaderComponent,
    FooterComponent,
    PopularBusinessComponent,
    CategoryComponent,
    StepsComponent,
    LoginComponent,
    SignupComponent,
    BusinessOptionComponent,
    BackButtonComponent,
    OrdersComponent,
    OrderComponent,
    InvoiceComponent,
    InvoiceStateComponent,
    OrderCartComponent,
    ProcessStepComponent,
    NavLinkComponent,
    AmountInputModalComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
