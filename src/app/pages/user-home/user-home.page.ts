import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  imgLists:any=[]
  constructor() { }

  ngOnInit() {

    //retrieve from firebase method
    firebase.firestore().collection('hotels').onSnapshot(res =>{
      res.forEach(element=>{
        this.imgLists.push(element.data());
        console.log(this.imgLists)
      });
      console.log('Successful')
    })
  }

}
