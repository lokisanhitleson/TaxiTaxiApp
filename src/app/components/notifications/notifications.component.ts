import { Component, OnInit } from '@angular/core';
import { PopoverController  } from "@ionic/angular";
import { NavController, MenuController} from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  popover: any;

  constructor(public popoverController: PopoverController,public navCtrl: NavController,
    public menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  goViewRequest() {
    this.popover.dismiss();
    this.navCtrl.navigateRoot('/view-request');
  }
}
