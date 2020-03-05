import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EnterdetailsComponent } from './enterdetails/enterdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterdetailsComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
