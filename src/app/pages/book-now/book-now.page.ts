import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNOwPage implements OnInit {
  check_in:any;
  check_out:any;
  roomtype:any;
  adults:any;
  kids:any
 owneruid:any
  collection:any;
  feedback:any;
  bookingState: any =0;
  constructor(private service: ServicesService) { 
    this.collection = 'hotel';
  }

  ngOnInit() {
    
}
addbookings(){
  this.bookingState=1;
//    this.service.addbookings(this.service.getUseruid(),this.check_in,this.check_out,this.roomtype,this.adults,this.kids,this.service.getUseruid())
//   this.feedback = "Successfully Booked!!!";
this.service.addbookings(this.service.getUseruid(),this.check_in,this.check_out,this.roomtype,this.adults,this.kids,this.service.getUseruid());
   

}

confirmBooking(){
  return('booking Successful')
}
}

