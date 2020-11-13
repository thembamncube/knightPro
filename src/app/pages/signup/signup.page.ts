import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  isSignedIn = false
  constructor(private serviceService: ServicesService, public route: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
  }

  async onSignUp(email :string, password: string){
    await this.serviceService.signUp(email,password)
    if(this.serviceService.isLoggedIn)
    this.route.navigate(["login"]);
  }
}
