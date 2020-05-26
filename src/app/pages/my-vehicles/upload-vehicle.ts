import { Component, OnInit, Input } from '@angular/core';
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

  @Input() title: string;
  @Input() displayImage: string;
  @Input() frontImage: string;
  @Input() backImage: string;
  @Input() leftImage: string;
  @Input() rightImage: string;

  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


  constructor(
    private modalController: ModalController,
    private crop: Crop,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
  ) {
  }


  ngOnInit() {
    
  }
  async submitModal() {
    this.modalController.dismiss({
      displayImage: this.displayImage,
      frontImage: this.frontImage,
      backImage: this.backImage,
      leftImage: this.leftImage,
      rightImage: this.rightImage
    });
  }

  //Image Crop and Upload
  pickImage(sourceType, n: number) {
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
      this.cropImage(imageData, n)
    }, (err) => {
      // Handle error
    });
  }

  async selectImage(n: number) {
    this.pickImage(this.camera.PictureSourceType.CAMERA, n);
  }

  cropImage(fileUrl, n: number) {
    this.crop.crop(fileUrl, { quality: 50 })
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0], n)
        },
        error => {
        }
      );
  }

  showCroppedImage(ImagePath, n: number) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      switch (n) {
        case 1:
          this.displayImage = base64;
          break;
        case 2:
          this.frontImage = base64;
          break;
        case 3:
          this.backImage = base64;
          break;
        case 4:
          this.leftImage = base64;
          break;
        case 5:
          this.rightImage = base64;
      }
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }




}