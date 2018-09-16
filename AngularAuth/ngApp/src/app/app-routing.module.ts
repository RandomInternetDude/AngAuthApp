import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch:'full'
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'special',
    component: SpecialComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
