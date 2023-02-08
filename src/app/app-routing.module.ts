import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RoomComponent } from './room/room/room.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'room',
    component: RoomComponent,
    children: [
      // { 
      //   path: ':id', 
      //   component: UserComponent }
    ]
  },
  
  // {
  //   path: 'servers',
  //   canActivateChild: [AuthGuard],
  //   component: ServersComponent,
  //   children: [
  //     { path: ':id/edit', canActivate:[RolGuardGuard,  AuthGuard ] , component: EditServerComponent },
  //     { path: ':id', component: ServerComponent}
  //   ]
  // },
  
  {
    path: '**',
    component: NotFoundComponent
  }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
