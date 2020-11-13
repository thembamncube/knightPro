import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.page.html',
  styleUrls: ['./img-upload.page.scss'],
})
export class ImgUploadPage implements OnInit {
 
  feedback: string;

  constructor(private service: ServicesService) { }

//for gallery
  addImages(){
    this.service.addImages(this.service.getUseruid() ,this.service.getUseruid(), this.imgUrl)
    this.feedback = "Image Uploaded Successfully!";
  }

  imgUrl(arg0: any, arg1: any, imgUrl: any) {
    throw new Error('Method not implemented.');
  }
  fileChangeEvent(editFileInput: any){
    const reader = new FileReader();
        reader.onload = (e:any)=>{
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs=> {
              const imgBase64Path = e.target.result;
              this.imgUrl = imgBase64Path;
              return this.imgUrl;
            }
          }
          reader.readAsDataURL(editFileInput.target.files[0])
  }
  ngOnInit() {
  }

}
