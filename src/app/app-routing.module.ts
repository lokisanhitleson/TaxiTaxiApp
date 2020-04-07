import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'otp', loadChildren: './pages/otp/otp.module#OtpPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'cars', loadChildren: './pages/cars/cars.module#CarsPageModule' },
  { path: 'vehicle-detail', loadChildren: './pages/vehicle-detail/vehicle_detail.module#VehicleDetailPageModule' },
  { path: 'agent-profile', loadChildren: './pages/agent-profile/agent-profile.module#AgentProfilePageModule' },
  { path: 'add-vehicle', loadChildren: './pages/add-vehicle/add-vehicle.module#AddVehiclePageModule' },
  { path: 'view-request', loadChildren: './pages/view-request/view-request.module#ViewRequestPageModule' },
  { path: 'request-vehicle', loadChildren: './pages/request-vehicle/request-vehicle.module#RequestVehiclePageModule' },
  { path: 'my-vehicles', loadChildren: './pages/my-vehicles/my-vehicles.module#MyVehiclesPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
