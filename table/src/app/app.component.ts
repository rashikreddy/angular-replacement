import { Component, ViewChild } from '@angular/core';
import { CalculateComponent } from './calculate/calculate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  public number : number;
  public child :boolean = false;
  
  changeOccured(){
    this.child = false;
  }
  
}