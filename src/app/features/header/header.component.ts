import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../Services/core.service';
import { ConsoleComponent } from '../console/console.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  slideValue:boolean;

  constructor(private coreService:CoreService) { }

  ngOnInit() {
    this.slideValue = true;
  }

  slideChange()
  {
      if(this.slideValue)
        this.coreService.TurnOn().subscribe();
      else
        this.coreService.TurnOff().subscribe();
    
  }

}
