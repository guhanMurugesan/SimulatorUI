import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../Services/players.service';
import { Player } from '../../Modals/player';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  Message:string;
  Players: Player[];

  selectedPlayer:Player;

  constructor(private playersService:PlayersService,public snackBar: MatSnackBar) { }

  ngOnInit() {
      this.getPlayers();
  }

  getPlayers(){
    this.playersService.getPlayers().subscribe(x=>this.Players = x);
  }

  selectPlayer(value: Player):void 
  {
    this.selectedPlayer = value;
  }

  update(){
    this.Message = "";
    this.playersService.setPlayer(this.selectedPlayer).subscribe(x=> {
      this.snackBar.open(x,'undo',{
        duration: 500,
        panelClass :'toaster'
      });
    } );
  }

}
