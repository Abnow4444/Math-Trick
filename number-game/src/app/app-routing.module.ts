import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { GameBodyComponent } from './game-body/game-body.component';

const routes: Routes = [
  {path: 'game', component: GameBodyComponent},
  {path: '', pathMatch: 'full', redirectTo: 'game'},
  {path: 'error', pathMatch: 'full', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
