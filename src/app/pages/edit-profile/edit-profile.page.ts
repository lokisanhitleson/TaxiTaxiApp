import { Component, OnInit ,Input} from '@angular/core';
import { NavController, MenuController, LoadingController,AlertController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { editProfiles } from './edit-profile.services';
import { editProfile } from '../../models/agencymodel'; 
import { Storage } from '@ionic/storage';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public onAgencyeditProfileForm: FormGroup; 
  formSubmitted :boolean;
  croppedImagepath = "assets/img/user-default.png";
  isLoading = false;
  agencyName: string;
  agencyemail: string;
  agencyRegisterNumber:string;
  firstName: string;
  agencyAddress:string;
  agencyRegion:string;
  @Input() agencyUrl: string;
  //agencyUrl = "assets/img/user-default.png";
  editProfileDatas:[editProfile];
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private _location: Location,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    public translate: TranslateService,     
    public TranslateModule: TranslateModule,
    private imagePicker: ImagePicker,
    private formBuilder: FormBuilder,
    private editProfiles: editProfiles,
    public Storage:Storage,
    private crop: Crop,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
    ) {
      this.editProfiles.editProfileData().subscribe( async data => {             
        if (data && data.status === "SUCCESS") {
          console.log(data,"editprofilevalues")
          this.agencyName = data.data.agencyName;
          this.agencyemail =data.data.email;
          this.firstName = data.data.firstName;
          this.agencyRegisterNumber =data.data.agencyRegisterNumber;
          this.agencyAddress = data.data.agencyAddress;
          this.agencyRegion =data.data.agencyRegion;
          if(data.data.agencyLogoURL !== null){
            this.agencyUrl = data.data.agencyLogoURL 
          }
          else{
            this.agencyUrl = "assets/img/user-default.png";
          }
        }
      });
      
     
     }

  ngOnInit() {
    this.onAgencyeditProfileForm = this.formBuilder.group({
      'agencyName': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([\w\-][a-zA-Z0-9_ ]{0,30})$/)
      ])],
      'agencyRegNum': [null, Validators.compose([
        Validators.pattern(/^[a-zA-Z0-9]{0,30}$/)
      ])],
      'region': [null, Validators.compose([
        Validators.required
      ])],
      'contactName': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([\w\-][a-zA-Z0-9_ ]{0,30})$/)
      ])],
       'email': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
      ])],
      'Address': [null, Validators.compose([
        Validators.pattern(/^(\w*\s*[\#\-\,\/\.\(\)\&]*)+/)
      ])]
    });
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home/home-results');
    });
  }

  //Image Crop and Upload
  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      allowEdit: false,
      correctOrientation: true,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.cropImage(imageData)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.agencyUrl = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }


  editProfilesave() {
    this.formSubmitted = true;
   console.log(this.onAgencyeditProfileForm);
    if (this.onAgencyeditProfileForm.invalid) {
        return;
    }   
    const loading = this.loadingCtrl.create();
    loading.then( loading => loading.present());     
      var AgencyName = this.onAgencyeditProfileForm.value.agencyName;
      var AgencyRegisterationNumber = this.onAgencyeditProfileForm.value.agencyRegNum;
      var ContactName = this.onAgencyeditProfileForm.value.contactName;  
      var Region = this.onAgencyeditProfileForm.value.region;
      var email = this.onAgencyeditProfileForm.value.email;
      var address = this.onAgencyeditProfileForm.value.Address;
      let profileData = this.agencyUrl;
      console.log(AgencyName,AgencyRegisterationNumber,ContactName,Region,email,address);
      this.editProfiles.setEditProfile(AgencyName,AgencyRegisterationNumber,ContactName,Region,email,address)
      .subscribe(      
        (response) => { 
          loading.then( loading => loading.dismiss());         
        if (response && response.status =="SUCCESS" ){
          this.toastCtrl.create({
            showCloseButton: true,
            message: 'Sucessfully updated',
            duration: 3000,
            position: 'bottom'
          }).then(toast => toast.present())  
          console.log(response);    
        }  else {
          
          if(!response)
          this.toastCtrl.create({
            showCloseButton: true,
            message: 'Connection failed! try again',
            duration: 3000,
            position: 'bottom'
          }).then(toast => toast.present())  
        }           
      },   err => {
        loading.then( loading => loading.dismiss());
        this.toastCtrl.create({
        showCloseButton: true,
        message: 'Connection failed! try again',
        duration: 3000,
        position: 'bottom'
      }).then(toast => toast.present()) 
    }
      );
   
  }
//Back btn
  previous() 
  { 
    this._location.back(); 
  }
}
