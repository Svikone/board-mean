import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { AuthComponent } from './auth/auth.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {path:'board',component:BoardComponent},
  {path:'auth',component:AuthComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
