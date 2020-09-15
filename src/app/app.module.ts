import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { ArchwizardModule } from 'ng2-archwizard';

import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
// ionic storage
import { IonicStorageModule } from '@ionic/storage';
// Modal Pages
import { ImagePageModule } from './pages/modal/image/image.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';

// Components
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CalendarModule } from 'ion2-calendar';

import { AuthInterceptor } from './pages/interceptor/auth.interceptor';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastService } from './pages/services/toast.service';
import { DateService } from './pages/services/date.service';
import { SelectRegionModal } from './pages/select-region/select-region';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { Firebase } from '@ionic-native/firebase/ngx';
import { FcmService } from './pages/services/fcm.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// const firebaseConfig = {
//   apiKey: 'AIzaSyD4bpkohnNCqZWoh5xszLk_0vp_nzvMS5A',
//   authDomain: 'taxi-app-mazelon.firebaseapp.com',
//   databaseURL: 'https://taxi-app-mazelon.firebaseio.com',
//   projectId: 'taxi-app-mazelon',
//   storageBucket: 'taxi-app-mazelon.appspot.com',
//   messagingSenderId: '1040474063041',
//   appId: '1:1040474063041:web:af276480a56baf7f961440',
//   measurementId: 'G-8FYTZFT6SM'
// };

@NgModule({
  declarations: [AppComponent, NotificationsComponent, SelectRegionModal],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ImagePageModule,
    FormsModule,
    SearchFilterPageModule,
    NgOtpInputModule,
    ArchwizardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    StatusBar,
    SplashScreen,
    DatePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Media,
    File,
    ImagePicker,
    Crop,
    // tslint:disable-next-line: deprecation
    FileTransfer,
    Camera,
    ToastService,
    DateService,
    // Firebase,
    FcmService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
