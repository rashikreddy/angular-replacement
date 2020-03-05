import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }
  @Input() public data: any;
  @Output() public deleteData = new EventEmitter();
  delete(item){
    var index = this.data.indexOf(item);
    this.data.splice(index,1);
   }
  ngOnInit(): void {
  }

}
