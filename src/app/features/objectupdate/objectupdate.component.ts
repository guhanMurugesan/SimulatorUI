import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-objectupdate',
  templateUrl: './objectupdate.component.html',
  styleUrls: ['./objectupdate.component.css']
})
export class ObjectupdateComponent implements OnInit {

  constructor() { }

  @Input() UpdateObject : any;

  ngOnInit() {
    console.log(this.UpdateObject);
  }

  getProperties(): Array<string>
  {
    return Object.getOwnPropertyNames(this.UpdateObject);
  }

}
