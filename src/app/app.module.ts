import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
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
    ObjectupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
