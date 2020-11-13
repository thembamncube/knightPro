
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 import  firebase from 'firebase';
 import 'firebase/auth';


import 'firebase/auth';
import 'firebase/firestore'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  isLoggedIn = false
  currentUser: any;
trackUser :any;
  constructor(
    public router : Router) { }




      //signin from lebo
      // async signIn(email: string , password: string,){
      //   await firebase.auth().signInWithEmailAndPassword(email,password).then(res =>{
      //     this.isLoggedIn = true
      //     localStorage.setItem('user',JSON.stringify(res.user))
      //   })}
      async signIn(email,password){
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          results=>{
            this.currentUser   = firebase.auth().currentUser;
            var user_uid = this.currentUser.uid
            this.userUID(user_uid)
            console.log(user_uid);
            this.router.navigateByUrl('/user-home');
          })
          }

          async signInowner(email,password){
            firebase.auth().signInWithEmailAndPassword(email,password).then(
              results=>{
                this.currentUser   = firebase.auth().currentUser;
                var user_uid = this.currentUser.uid
                this.userUID(user_uid)
                console.log(user_uid);
                this.router.navigateByUrl('/dashboard');
              })
              }
        //signup from lebbo
        async signUp(email: string , password: string,){
          await firebase.auth().createUserWithEmailAndPassword(email,password).then(res =>{
            this.isLoggedIn = true
            localStorage.setItem('user',JSON.stringify(res.user))
          })
        }
//asign uid 
      userUID(uid){

        this.trackUser=uid; //store unique id
      }
//get uid
      getUseruid(){
        return this.trackUser; //track
      }


     
      

//add hotel profile to hotels collection in the database
addProfileHotel(uid,name,rating,location,types,price,owneruid,collection,imgUrl){
  var db =firebase.firestore();
  var hotelsRef = db.collection("hotels");
  var hotel = Promise.all([
    hotelsRef.doc(uid).set({
        hotelname: name,
        location:location,
        rating: rating,
        types: types,
        price: price,
        owneruid:owneruid,
        imgUrl:imgUrl
    })
]);
}
//Images(gallary) add images in the images document inside hotels collection
addImages(uid,owneruid,imgUrl){
  var db =firebase.firestore();
  var hotelsRef = db.collection("hotels");
  var hotel = Promise.all([
    hotelsRef.doc(uid).collection('images').doc().set({
      owneruid:owneruid,
      imgUrl:imgUrl
    })
]);
}

addbookings(useruid,check_in,check_out,roomtype,adults,kids,owneruid){
  var db =firebase.firestore();
  var hotelsRef = db.collection("hotels");
  var hotel = Promise.all([
    hotelsRef.doc(owneruid).collection("bookings").add({
        useruid:useruid,
        check_in: check_in,
        check_out:check_out,
        roomtype: roomtype,
        adults: adults,
        kids: kids,
        owneruid:owneruid,
        
    })
]);

}
}
