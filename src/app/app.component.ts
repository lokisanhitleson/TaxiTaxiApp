import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Platform, NavController, AlertController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AgencyProfileImage } from "../app/models/agencymodel";
import { Pages } from "./interfaces/pages";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AuthService } from "./pages/services/auth.service";
import { SharedService } from "./pages/sharedService/shared.service";
import { FcmService } from "./pages/services/fcm.service";
import { ToastService } from "./pages/services/toast.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public appPages: Array<Pages>;
  pages = [
    {
      title: "SIDE_MENU_ITEMS.HOME",
      url: "/home/tabs/home-results",
      direct: "root",
      icon: "icon-home",
    },
    {
      title: "SIDE_MENU_ITEMS.MY_VEHICLES",
      url: "/my-vehicle-list",
      direct: "forward",
      icon: "icon-steering-wheel",
    },
    {
      title: "SIDE_MENU_ITEMS.ASK_VEHICLE",
      url: "/home/tabs/request-vehicle",
      direct: "forward",
      icon: "icon-car-front",
    },
    {
      title: "SIDE_MENU_ITEMS.MY_REQUEST",
      url: "/myrequest",
      direct: "forward",
      icon: "icon-profile",
    },
    {
      title: "SIDE_MENU_ITEMS.VIEW_REQUEST",
      url: "/home/tabs/view-request",
      direct: "forward",
      icon: "icon-bell",
    },
    {
      title: "SIDE_MENU_ITEMS.APP_SETTINGS",
      url: "/home/tabs/home-results",
      direct: "forward",
      icon: "icon-cog",
    },
    {
      title: "SIDE_MENU_ITEMS.HELP_MENU",
      url: "/home/tabs/home-results",
      direct: "forward",
      icon: "icon-help",
    },
    {
      title: "SIDE_MENU_ITEMS.SIGN_OUT",
      url: "/login",
      direct: "forward",
      icon: "icon-exit",
    },
    {
      title: "COMMON.LANGUAGES",
      children: [
        {
          title: "English",
          value: "en",
        },
        {
          title: "தமிழ்",
          value: "ta",
        },
      ],
    },
  ];

  lang: any;
  agencyName: string;
  region: string;
  agencyUrl = "assets/img/user-default.png";
  agencyProfileImagedatas: [AgencyProfileImage];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public translate: TranslateService,
    public storage: Storage,
    public sranslateModule: TranslateModule,
    public alertController: AlertController,
    private authService: AuthService,
    private sharedService: SharedService,
    private fcm: FcmService,
    private toast: ToastService
  ) {
    this.lang = "en";
    this.translate.setDefaultLang("en");
    this.translate.use("en");

    this.setProfileData();
    this.sharedService.currentProfileCheck.subscribe(async (data) => {
      if (data) {
        this.setProfileData();
      }
    });

    this.initializeApp();
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe((msg) => {
      if (this.platform.is("ios")) {
        this.toast.showToast(msg.aps.alert);
      } else {
        this.toast.showToast(msg.body);
      }
    });
  }

  setProfileData() {
    this.storage.get("userData").then((val) => {
      // ionicstorage
      if (val) {
        this.agencyName = val.agencyName;
        this.region = val.agencyRegion;
        if (val.agencyLogoURL !== null) {
          this.agencyUrl = this.generateThumbnail(val.agencyLogoURL);
        } else {
          this.agencyUrl = "assets/img/user-default.png";
        }
      }
    });
  }

  switchLanguage() {
    this.translate.use(this.lang);
  }

  initializeApp() {
    this.platform
      .ready()
      .then(() => {
        // let status bar overlay webview
        this.statusBar.overlaysWebView(false);
        // set status bar to black
        this.statusBar.backgroundColorByHexString("#662d91");
        this.statusBar.styleLightContent();

        // this.statusBar.styleDefault();
        setTimeout(() => {
          this.splashScreen.hide();
        }, 1000);
        this.notificationSetup();
      })
      .catch(() => {});
  }

  // App Update Alert
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Update getRide!",
      cssClass: "AppUpdateAlert",
      message: "This app won't run unless you update.",
      backdropDismiss: false,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Update",
          cssClass: "primary",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {
    // this.presentAlertConfirm();
  }

  generateThumbnail(url: string) {
    if (url) {
      const split = url.split("/");
      const last = split.pop();
      const first = split.join("/");
      return `${first}/thumbnails/${last}`;
    } else {
      return url;
    }
  }

  goToEditProgile() {
    this.navCtrl.navigateForward("edit-profile");
  }
  async logout() {
    this.authService.logout();
    this.sharedService.changeAuthTokenCheck(null);
    this.sharedService.changeLoginCheck(await this.authService.isLoggedIn());
    this.navCtrl.navigateRoot("/login");
  }
}
