import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-onwnerlogin',
  templateUrl: './onwnerlogin.page.html',
  styleUrls: ['./onwnerlogin.page.scss'],
})
export class OnwnerloginPage implements OnInit {
  isSignedIn = false
  constructor( public serviceService:ServicesService,
    public router : Router) { }

  ngOnInit() {
     //sign in from serviceService
     if(localStorage.getItem('user')!== null)
     this.isSignedIn = true
     else
     this.isSignedIn = false

     if(localStorage.getItem('user')!== null)
     this.isSignedIn = true
     else
     this.isSignedIn = false
  }
  async onSignIn(email :string, password: string){
    await this.serviceService.signInowner(email,password)
    if(this.serviceService.isLoggedIn)
    this.router.navigate(["/dashboard"]);
  }
}
