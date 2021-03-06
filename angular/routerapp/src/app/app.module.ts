import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RmComponent } from './rm/rm.component';
import { JumboComponent } from './dashboard/jumbo/jumbo.component';
import { AlertComponent } from './dashboard/alert/alert.component';
import { StarterComponent } from './dashboard/starter/starter.component';
import { FormsComponent } from './forms/forms.component';
import { DataDrivenFormsComponent } from './forms/data-driven-forms/data-driven-forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { HttpComponent } from './http/http.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { MobfltPipe } from './pipes/mobflt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RmComponent,
    JumboComponent,
    AlertComponent,
    StarterComponent,
    FormsComponent,
    DataDrivenFormsComponent,
    TemplateDrivenFormsComponent,
    HttpComponent,
    PipesComponent,
    CustomPipe,
    MobfltPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // template driven
    ReactiveFormsModule, // data driven
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
