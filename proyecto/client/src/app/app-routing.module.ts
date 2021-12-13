import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/views/landing-page/landing-page.component';
import { CategoriesComponent } from './core/views/categories/categories.component';
import { CartComponent } from './core/views/cart/cart.component';
import {UserAccessComponent } from './core/views/user-access/user-access.component';
import {BusinessComponent } from './core/views/business/business.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrdersComponent } from './core/components/orders/orders.component';
import { OrderComponent } from './core/components/order/order.component';
import { CommercialInvoiceComponent } from './core/views/commercial-invoice/commercial-invoice.component';
import { InvoiceStateComponent } from './core/views/invoice-state/invoice-state.component';
import { DataInvoiceComponent } from './core/views/data-invoice/data-invoice.component';
import { BusinessProductsComponent } from './core/views/business-products/business-products.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'cat_business/:category_id',
        component: BusinessComponent,
      },
      {
        path: 'cat_business/:category_id/business-details/:business_id',
        component: BusinessProductsComponent
      },
    ]
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path:'orders',
        component: OrdersComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  },
  {
    path: 'commercial-invoice',
    component: CommercialInvoiceComponent
  },
  {
    path: 'state-invoice/:order_id',
    component: InvoiceStateComponent
  },
  {
    path: 'data-order',
    component: DataInvoiceComponent
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
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
