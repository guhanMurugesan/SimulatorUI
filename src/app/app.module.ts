import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './features/Root/app.component';
import { CoreComponent } from './features/core/core.component';
import { ConsoleComponent } from './features/console/console.component';
import { MenuComponent } from './features/menu/menu.component';
import { HeaderComponent } from './features/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { PrecommitmentComponent } from './features/precommitment/precommitment.component';
import { PlayersComponent } from './features/players/players.component';
import { AssetsComponent } from './features/assets/assets.component';
import { ObjectupdateComponent } from './features/objectupdate/objectupdate.component';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserXhr } from '../../node_modules/@angular/http';
import { CustBrowserXhr } from './CustBrowserXhr';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GamecapComponent } from './features/gamecap/gamecap.component';
import { JackpotComponent } from './features/jackpot/jackpot.component';
import { SystemComponent } from './features/system/system.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { EmployeeComponent } from './features/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ConsoleComponent,
    MenuComponent,
    HeaderComponent,  
    PrecommitmentComponent,
    PlayersComponent,
    AssetsComponent,
    ObjectupdateComponent,
    GamecapComponent,
    JackpotComponent,
    SystemComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,MatButtonModule,MatCheckboxModule,MatSlideToggleModule,MatTableModule,MatFormFieldModule,MatInputModule
  ],
  providers: [
    {provide:BrowserXhr,useClass:CustBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
