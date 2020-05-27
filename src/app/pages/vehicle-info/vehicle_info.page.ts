import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Location } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle_info.page.html',
  styleUrls: ['./vehicle_info.page.scss'],
})
export class VehicleInfo implements OnInit {
  public infoSelector: string = 'vehicle';

  constructor(private datePicker: DatePicker,
    private _location: Location,
    public translate: TranslateService,
    public TranslateModule: TranslateModule
  ) { }

  slidesDidLoad(slides: IonSlides) {
    slides.stopAutoplay();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  ngOnInit() {
  }
  previous() {
    this._location.back();
  }
}
