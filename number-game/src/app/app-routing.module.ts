import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmojiBoxComponent } from './emoji/emoji-box/emoji-box.component';
import { ErrorComponent } from './error/error.component';
import { GameBodyComponent } from './game-body/game-body.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'game', component: GameBodyComponent },
      { path: '', pathMatch: 'full', redirectTo: 'game' },
      { path: 'login', component: LoginComponent},
      { path: 'users', component: UserListComponent},
      { path: 'emoji', component: EmojiBoxComponent},
      { path: '**', pathMatch: 'full', component: ErrorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
