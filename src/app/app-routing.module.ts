import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: 'home',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule'
  },
  { path: 'otp', loadChildren: './pages/otp/otp.module#OtpPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'create-password', loadChildren: './pages/create-password/create-password.module#CreatePasswordPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'my-vehicles', loadChildren: './pages/my-vehicles/my-vehicles.module#MyVehiclesPageModule' },
  { path: 'my-vehicle-list', loadChildren: './pages/my-vehicle-list/my-vehicle-list.module#MyVehicleListModule' },
  { path: 'register-agency', loadChildren: './pages/register-agency/register-agency.module#RegisterAgencyPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
