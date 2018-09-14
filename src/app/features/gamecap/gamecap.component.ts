import { Component, OnInit } from '@angular/core';
import { GamecapService } from '../../Services/gamecap.service';
import { Gamecap } from '../../Modals/gamecap';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-gamecap',
  templateUrl: './gamecap.component.html',
  styleUrls: ['./gamecap.component.css']
})
export class GamecapComponent implements OnInit {

  constructor(private gameCapService:GamecapService,public snackBar: MatSnackBar) { }

  data:Gamecap;
  Message:String;

  ngOnInit() {
    this.get();
  }

  get()
  {
    this.gameCapService.get().subscribe(x=>this.data = x);
  }

  update()
  {
    this.gameCapService.Update(this.data).subscribe(x=> {
      this.snackBar.open(x,'undo',{
        duration: 500,
        panelClass :'toaster'
      });
    });
  }

}
