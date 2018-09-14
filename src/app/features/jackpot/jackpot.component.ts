import { Component, OnInit } from '@angular/core';
import { JackpotService } from '../../Services/jackpot.service';
import { JackpotSlip } from '../../Modals/jackpot';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {

  constructor(private jackpotService:JackpotService,public snackBar: MatSnackBar) { }

  data:JackpotSlip;
  Message:string;

  ngOnInit() {
    this.get();
  }

  get()
  {
    this.jackpotService.get().subscribe(x=>this.data = x);
  }

  update()
  {
    this.jackpotService.Update(this.data).subscribe(x=> {
      this.snackBar.open(x,'undo',{
        duration: 500,
        panelClass :'toaster'
      });
    });
    
  }

}


