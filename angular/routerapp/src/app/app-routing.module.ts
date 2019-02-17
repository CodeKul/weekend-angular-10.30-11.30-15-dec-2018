import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RmComponent } from './rm/rm.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '' },
  { path: 'dash/:usNm', component: DashboardComponent },
  { path: 'rm/:usNm', component: RmComponent },

  { path: '**', redirectTo: 'rm/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
