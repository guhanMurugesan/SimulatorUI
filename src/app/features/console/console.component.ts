import { Component, OnInit } from '@angular/core';
import { startWith, switchMap } from '../../../../node_modules/rxjs/operators';
import {interval} from "rxjs/internal/observable/interval";
import { ConsoleService } from '../../Services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  data :String;

  constructor(private consoleService:ConsoleService) { 
    this.data = "";
  }

  ngOnInit() {
    interval(500000)
      .pipe(
         startWith(0),
         switchMap(() => this.consoleService.getData())
      )
      .subscribe(res=> this.setUp(res));
  }

  setUp(result)
  {
    var temp = this.data;
    result+= temp;
    this.data = result;
  }

}
