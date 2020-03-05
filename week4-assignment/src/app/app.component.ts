import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4-assignment';
  constructor(){ }

  public userData = [];

  getData(event){
    console.log(event);
    this.userData.push(event);
    console.log(this.userData)
  }
  
  
}


