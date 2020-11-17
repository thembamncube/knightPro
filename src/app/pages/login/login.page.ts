import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isSignedIn = false
  constructor(private serviceService:ServicesService,
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
      await this.serviceService.signIn(email,password)
      if(this.serviceService.isLoggedIn)
      this.router.navigateByUrl('/user-home');
    }
  }
 
 


    
  

 