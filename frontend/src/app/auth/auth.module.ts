import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule} from '@angular/common';
import {
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
  
  } from '@angular/material';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SignupComponent,
    AuthComponent,
    SigninComponent
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
  ]
})
export class AuthModule { }
