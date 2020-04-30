import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from "@ionic/angular";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.page.html',
  styleUrls: ['./detail-request.page.scss'],
})
export class DetailRequestPage implements OnInit {

  constructor(
    private _location: Location, 
    public navCtrl: NavController,
    public translate: TranslateService, 
    public TranslateModule : TranslateModule,
    ) { }
  request =[
    {
    agentname:"R.Satheesh Kumar",
    location:"Chennai",
    mobilenumber:"9884420042",
    vehiclename:"Tata Indica",
    vehicletype:"Prime",
    from:"Tambaram",
    to:"Chengalpattu",
    time:"10 mins ago",
    description:"Need a 4 seater vehicle urgently for 3 days please contact me if you have any.."
  }
  ];

  ngOnInit() {
  }
  previous() 
  { 
    this._location.back(); 
  }

}
