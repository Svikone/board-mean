import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './board/header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { HttpService} from './service/http.service';
import { AuthModule } from './auth/auth.module';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { CardComponent } from './board/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    CardComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
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
    BrowserAnimationsModule,
    MatSliderModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

