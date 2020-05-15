import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'upload-vehicle',
  templateUrl: './upload-vehicle.html',
  styleUrls: ['./upload-vehicle.scss'],
})
export class UploadVehicle implements OnInit {

  modalTitle: string;
  modelId: number;

  croppedImagepath = "assets/img/displayview.jpg";
  frontView = "assets/img/frontview.jpg";
  backView = "assets/img/backview.jpg";
  leftView = "assets/img/leftview.jpg";
  rightView = "assets/img/rightview.jpg";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
  ) { }


  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
  async cancelModal() {
    this.modalController.dismiss();
  }
  async submitModal() {
    this.modalController.dismiss();
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
      buttons: [
        //   {
        //   text: 'Load from Library',
        //   handler: () => {
        //     this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        //   }
        // },
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
      this.frontView = base64;
      this.backView = base64;
      this.leftView = base64;
      this.rightView = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }




}