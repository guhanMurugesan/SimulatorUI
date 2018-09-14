import { Component, OnInit } from '@angular/core';
import { PrecommitmentService } from '../../Services/precommitment.service';
import { PcData } from '../../Modals/PcData';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-precommitment',
  templateUrl: './precommitment.component.html',
  styleUrls: ['./precommitment.component.css']
})
export class PrecommitmentComponent implements OnInit {

  constructor(private service:PrecommitmentService,public snackBar: MatSnackBar) { }

  pcData:PcData;
  Message:string;

  ngOnInit() {
    this.getPcData();
  }

  ApproachingNotification()
  {
    this.service.SendApproachingNotification().subscribe();
  }

  LimitReachedNotification()
  {
    this.service.SendLimitReachedNotificationn().subscribe();
  }

  PlayerRgNotification()
  {
    this.service.SendPlayerRgNotification().subscribe();
  }

  RelaxNotification()
  {
    this.service.SendRelaxNotification().subscribe();
  }

  getPcData()
  {
    this.service.getPc().subscribe(x=>this.pcData = x);
  }

  update()
  {
    this.service.update(this.pcData).subscribe(x=>{
      this.snackBar.open(x,'undo',{
        duration: 500,
        panelClass :'toaster'
      });
    });
  }

}
