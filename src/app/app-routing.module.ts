import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'img-upload',
    loadChildren: () => import('./pages/img-upload/img-upload.module').then( m => m.ImgUploadPageModule)
  },
  {
    path: 'view-list',
    loadChildren: () => import('./pages/view-list/view-list.module').then( m => m.ViewListPageModule)
  },
 
  {
    path: 'view-single-profile/:uid',
    loadChildren: () => import('./pages/view-single-profile/view-single-profile.module').then( m => m.ViewSingleProfilePageModule)
  },
  {
    path: 'book-now',
    loadChildren: () => import('./pages/book-now/book-now.module').then( m => m.BookNOwPageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./pages/user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'add-hotel',
    loadChildren: () => import('./pages/add-hotel/add-hotel.module').then( m => m.AddHotelPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'onwnerlogin',
    loadChildren: () => import('./pages/onwnerlogin/onwnerlogin.module').then( m => m.OnwnerloginPageModule)
  },
  {
    path: 'onwnersignup',
    loadChildren: () => import('./pages/onwnersignup/onwnersignup.module').then( m => m.OnwnersignupPageModule)
  },
  {
    path: 'booking-history',
    loadChildren: () => import('./pages/booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  },  {
    path: 'booking-feed-back',
    loadChildren: () => import('./pages/booking-feed-back/booking-feed-back.module').then( m => m.BookingFeedBackPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
