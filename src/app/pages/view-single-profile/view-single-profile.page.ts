import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { element } from 'protractor';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-view-single-profile',
  templateUrl: './view-single-profile.page.html',
  styleUrls: ['./view-single-profile.page.scss'],
})
export class ViewSingleProfilePage implements OnInit {

  profileHotel:any=[]
uid = this.route.snapshot.params.uid;

  
  constructor(private route: ActivatedRoute) { 
    console.log(this.uid)
  }



  ngOnInit() {
firebase.firestore().collection('hotels').where("owneruid",'==',this.uid).onSnapshot(res=> {
  res.forEach(element=>{
    this.profileHotel.push(element.data()),
    console.log(this.profileHotel)
  });
  console.log("successful");
})
   
   }

}
