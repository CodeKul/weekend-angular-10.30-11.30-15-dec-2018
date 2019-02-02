import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { InfoActComponent } from './info-act/info-act.component';
import { InfoComponent } from './info-act/info.component';
import { ActionComponent } from './info-act/action.component';
import { BootstrapPricingComponent } from './bootstrap-pricing/bootstrap-pricing.component';
import { PricingNavComponent } from './bootstrap-pricing/pricing-nav.component';
import { CardContainerComponent } from './bootstrap-pricing/card-container/card-container.component';
import { FooterContainerComponent } from './bootstrap-pricing/footer-container/footer-container.component';
import { PricingCardComponent } from './bootstrap-pricing/card-container/pricing-card.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { NormalComponent } from './view-encapsulation/normal/normal.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    InfoActComponent,
    InfoComponent,
    ActionComponent,
    BootstrapPricingComponent,
    PricingNavComponent,
    CardContainerComponent,
    FooterContainerComponent,
    PricingCardComponent,
    InfoComponent,
    ViewEncapsulationComponent,
    NormalComponent,
    DatabindingComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
