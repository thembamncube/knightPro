import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {

  list:any=[]
feedback:any;
state:any=0;
  constructor(private route:ActivatedRoute,public serviceService:ServicesService) { 

   // this.hotelService.signOut()
 
  console.log(  this.serviceService.getUseruid())
    firebase.firestore().collection("hotels").doc(this.serviceService.getUseruid()).collection("bookings")
    .where("useruid", "==", this.serviceService.getUseruid())
    .get()
    .then((querySnapshot) => { 
        querySnapshot.forEach((doc)=> {
           this.list.push(Object.assign( doc.data(),{uid:doc.id}) );
         });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    
 }

  ngOnInit() {
  }

}
