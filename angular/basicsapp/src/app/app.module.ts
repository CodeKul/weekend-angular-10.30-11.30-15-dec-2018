import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { InfoActComponent } from './info-act/info-act.component';
import { InfoComponent } from './info-act/info.component';
import { ActionComponent } from './info-act/action.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    InfoActComponent,
    InfoComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
