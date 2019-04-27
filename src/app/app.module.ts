import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  


} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatInputModule
  ],
  exports:[
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
