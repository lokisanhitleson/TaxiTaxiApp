import { Component, OnInit, Input } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Location } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle_detail.page.html',
  styleUrls: ['./vehicle_detail.page.scss'],
})
export class VehicleDetailPage implements OnInit {

  @Input() vehicleDetails: any;
  @Input() vehicleImages: Array<{ img: string }>;
  myDate: string;
  myTime: string;
  myDateNTime: string;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private datePicker: DatePicker,
    private _location: Location,
    public translate: TranslateService,
    public translateModule: TranslateModule
  ) { }

  slidesDidLoad(slides: IonSlides) {
    slides.stopAutoplay();
  }

  ngOnInit() {
  }
  previous() {
    this._location.back();
  }
}
