import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren:()=> import('./welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
    path: 'sign-up',
    loadChildren:()=> import('./signup/signup.module').then(m=>m.SignupModule)
  }, 
  {
    path: 'sign-in',
    loadChildren:()=> import('./signin/signin.module').then(m=>m.SigninModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
