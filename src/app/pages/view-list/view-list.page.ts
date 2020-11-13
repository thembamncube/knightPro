import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.page.html',
  styleUrls: ['./view-list.page.scss'],
})
export class ViewListPage implements OnInit {

  profileHotel:any={}

  
  constructor(private service: ServicesService) { }
  ngOnInit() {
    firebase.firestore().collection('hotels').where("owneruid","==",this.service.getUseruid()).get().then(snapshot=>{
      snapshot.forEach((doc)=>{
        this.profileHotel = (doc.data())
      })
    })
  }


}