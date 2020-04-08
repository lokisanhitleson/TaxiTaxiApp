import { Component, OnInit } from '@angular/core';

import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
status: String = "";
recording:boolean = false;
audioFile : MediaObject;
  constructor(private media : Media, private file: File) { }

RecordAudio(){
this.audioFile = this.media.create(this.file.externalRootDirectory+'/audiofile.mp3');
this.audioFile.startRecord();
this.status = "Recording...";
this.recording = true;
}

StopRecording(){
this.audioFile.stopRecord();
this.status = "Stopped!"
this.recording = false;
}

  ngOnInit() {
  }

}
