import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './components/signup/signup.component';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
    {path:'',children:[
        {path:'signup',component:SignupComponent},
        {path:'signin',component:SigninComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
