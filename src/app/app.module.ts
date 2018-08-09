import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreComponent } from './features/core/core.component';
import { ConsoleComponent } from './features/console/console.component';
import { MenuComponent } from './features/menu/menu.component';
import { HeaderComponent } from './features/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ConsoleComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
