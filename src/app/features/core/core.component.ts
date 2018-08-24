import { Component, OnInit } from '@angular/core';
import { Config } from '../../Modals/Config';
import { CoreService } from '../../Services/core.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  data : Config;
  Message:string;

  constructor(private coreService:CoreService) { }

  ngOnInit() {
      this.getConfig();
  }

  getConfig()
  {
    this.coreService.getConfig().subscribe(x=> this.data = x);
  }

  UpdateConfig()
  {
    this.coreService.updateConfig(this.data).subscribe(x=> this.Message = x);
  }

}
