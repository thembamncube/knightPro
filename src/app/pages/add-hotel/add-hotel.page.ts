import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.page.html',
  styleUrls: ['./add-hotel.page.scss'],
})
export class AddHotelPage implements OnInit {

  rating:any
  location:any
  price:any
  name:any
  types:any;
  imgUrl:any;
/*End here */
 collection:any;
 feedback:any;
  constructor(private service:ServicesService) { this.collection = 'hotel'; }
  addProfileHotel(){
    this.service.addProfileHotel(this.service.getUseruid(),this.name,this.rating,this.location,this.types,this.price,this.service.getUseruid() ,this.collection,this.imgUrl);
    this.feedback = "Profile Added Successfully!";
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
