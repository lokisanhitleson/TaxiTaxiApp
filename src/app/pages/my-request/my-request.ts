import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-my-request",
  templateUrl: "./my-request.html",
  styleUrls: ["./my-request.scss"],
})
export class MyRequestPage implements OnInit {
  public requestUpdate: string;

  constructor(
    private _location: Location,
    public toastController: ToastController
  ) {}

  myrequest = [
    {
      vehicle: "Tata Indica",
      from: "Avadi",
      to: "Tambaram",
      dateon: "15 Sep 2020",
    },
  ];

  async requestDone() {
    const toast = await this.toastController.create({
      message: "Your request will be removed from public display!",
      duration: 2000,
    });
    toast.present();
  }

  ngOnInit() {}

  previous() {
    this._location.back();
  }
}
