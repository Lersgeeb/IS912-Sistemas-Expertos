import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptedDeliversManComponent } from './core/views/accepted-delivers-man/accepted-delivers-man.component';
import { AllOrdersComponent } from './core/views/all-orders/all-orders.component';
import { BusinessComponent } from './core/views/business/business.component';
import { DashboardComponent } from './core/views/dashboard/dashboard.component';
import { DeliverComponent } from './core/views/deliver/deliver.component';
import { LoginViewComponent } from './core/views/login-view/login-view.component';
import { OrdersComponent } from './core/views/orders/orders.component';
import { TablesViewComponent } from './core/views/tables-view/tables-view.component';
import { WaitingDeliversManComponent } from './core/views/waiting-delivers-man/waiting-delivers-man.component';
import { WaitingOrdersComponent } from './core/views/waiting-orders/waiting-orders.component';

const routes: Routes = [
  {
    path: '',
    component: LoginViewComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'main',
    component: TablesViewComponent,
    children: [
      {
        path: 'business',
        component: BusinessComponent
      },
      {
        path: 'orders',
        component: OrdersComponent,
        children: [
          {
            path: 'all-orders',
            component: AllOrdersComponent
          },
          {
            path: 'waiting-orders',
            component: WaitingOrdersComponent
          }
        ]
      },
      {
        path: 'delivers',
        component: DeliverComponent,
        children: [
          {
            path: 'accepted',
            component: AcceptedDeliversManComponent
          },
          {
            path: 'waiting',
            component: WaitingDeliversManComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
