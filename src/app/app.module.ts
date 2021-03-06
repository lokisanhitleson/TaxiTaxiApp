import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePicker } from '@ionic-native/date-picker/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    SearchFilterPageModule
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Media,
    File
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
