import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { UserAccessComponent } from './views/user-access/user-access.component';
import { OrdersComponent } from './views/orders/orders.component'
import { OrderPickedInvoiceComponent } from './views/order-picked-invoice/order-picked-invoice.component'
import { OrderInvoiceComponent } from './views/order-invoice/order-invoice.component'
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrdersListComponent } from './core/components/orders-list/orders-list.component';
import { DeliveryOrdersListComponent } from './core/components/delivery-orders-list/delivery-orders-list.component';
import { InvoiceComponent } from './core/components/invoice/invoice.component';
import { LocationInfoComponent } from './core/components/location-info/location-info.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'order-detail',
    component: OrderInvoiceComponent,
    children: [
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'location',
        component: LocationInfoComponent
      }
    ]
  },
  {
    path: 'order-picked-detail',
    component: OrderPickedInvoiceComponent,
    children: [
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'location',
        component: LocationInfoComponent
      }
    ]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      {
        path: 'order-list',
        component: OrdersListComponent
      },
      {
        path: 'delivery-list',
        component: DeliveryOrdersListComponent
      }
    ]
  },
  {
    path: 'access',
    component: UserAccessComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
