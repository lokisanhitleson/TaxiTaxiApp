import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  croppedImagepath = "assets/img/user-default.png";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private _location: Location,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
    ) { }

  ngOnInit() {
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
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
      this.croppedImagepath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

//Back btn
  previous() 
  { 
    this._location.back(); 
  }
}
