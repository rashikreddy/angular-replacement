import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrls: ['./enterdetails.component.css']
})
export class EnterdetailsComponent implements OnInit {

  constructor() { }
  a:string = '';
  b:string = '';
  @Output() public data=new EventEmitter<any>()
  submit(){
    if(this.a!=='' && this.b!==''){
    this.data.emit(this.a + ' ' + this.b);
    this.a='';
    this.b='';
    }
  }  
  ngOnInit(): void {
  }

}
