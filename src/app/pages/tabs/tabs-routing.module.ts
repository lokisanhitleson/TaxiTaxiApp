import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home-results', loadChildren: '../home-results/home-results.module#HomeResultsPageModule' },
      { path: 'cars', loadChildren: '../cars/cars.module#CarsPageModule' },
      // { path: 'vehicle-detail', loadChildren: '../vehicle-detail/vehicle_detail.module#VehicleDetailPageModule' },
      // { path: 'agent-profile', loadChildren: '../agent-profile/agent-profile.module#AgentProfilePageModule' },
      { path: 'schedule-vehicle', loadChildren: '../add-vehicle/add-vehicle.module#AddVehiclePageModule' },
      { path: 'view-request', loadChildren: '../view-request/view-request.module#ViewRequestPageModule' },
      { path: 'request-detail', loadChildren: '../view-request/detail-request.module#DetailRequestPageModule' },
      { path: 'request-vehicle', loadChildren: '../request-vehicle/request-vehicle.module#RequestVehiclePageModule' },
      { path: 'vehicle-info', loadChildren: '../vehicle-info/vehicle_info.module#VehicleInfoModule' }

    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/home-results',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
