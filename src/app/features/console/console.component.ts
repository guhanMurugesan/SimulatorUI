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

  data :string;

  constructor(private consoleService:ConsoleService) { }

  ngOnInit() {
    interval(5000)
      .pipe(
         startWith(0),
         switchMap(() => this.consoleService.getData())
      )
      .subscribe(res=> this.data += res);
  }

}
