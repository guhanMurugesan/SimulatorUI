import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../Services/system.service';
import { System } from '../../Modals/System';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor(private sytemService:SystemService,public snackBar: MatSnackBar) { }

  data:System;
  Message:String;

  ngOnInit() {
    this.get();
  }

  get()
  {
    this.sytemService.getSystemSettings().subscribe(x=>this.data = x);
  }

  update()
  {
    this.sytemService.UpdateSystemSetting(this.data).subscribe(x=> {
      this.snackBar.open(x,'undo',{
        duration: 500,
        panelClass :'toaster'
      });
    });
  }

}
