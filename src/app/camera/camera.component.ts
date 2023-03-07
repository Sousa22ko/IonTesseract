import { Component } from "@angular/core";
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { Tesseract } from "tesseract.ts";

@Component({
    selector: 'camera-component',
    templateUrl: 'camera.component.html',
    styleUrls: ['camera.component.scss'],
  })
  export class CameraComponent {

    imgData;
    result = 'esperando resultado';

    error = '';
    progress = 0;

    constructor() { }

    async openCamera() {
        const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera
        });

        console.log(image)
        this.imgData = image.dataUrl;
    }

    recognize () {  
        Tesseract.recognize(this.imgData, {lang : 'por'}).progress(prog => {
            console.log(prog)
            this.progress = prog.progress
            this.result = 'esperando resultado ' + prog.status;
        }).then(result => {
            this.result = result.text;
            console.log('result ', result)
        }).catch(err => {
            this.error = err.message
        });
    }
  }
  