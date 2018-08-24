import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './features/core/core.component';
import { PrecommitmentComponent } from './features/precommitment/precommitment.component';
import { PlayersComponent } from './features/players/players.component';
import { AssetsComponent } from './features/assets/assets.component';
import { SystemComponent } from './features/system/system.component';
import { GamecapComponent } from './features/gamecap/gamecap.component';
import { JackpotComponent } from './features/jackpot/jackpot.component';
import { EmployeeComponent } from './features/employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CoreComponent },
  {path: 'precommitment', component:PrecommitmentComponent},
  {path: 'players', component:PlayersComponent  },
  {path: 'assets', component:AssetsComponent},
  {path: 'system', component:SystemComponent},
  {path: 'gamecap', component:GamecapComponent},
  {path: 'jackpot', component:JackpotComponent},
  {path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
