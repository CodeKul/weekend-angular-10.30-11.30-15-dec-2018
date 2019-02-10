import { AggrService } from './services/aggr.service';
import { SampleService } from './services/sample.service';
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
import { MyBadgeComponent } from './databinding/my-badge/my-badge.component';
import { InterCompV1Component } from './inter-comp-v1/inter-comp-v1.component';
import { ProgressComponent } from './inter-comp-v1/progress/progress.component';
import { EmojisComponent } from './inter-comp-v1/emojis/emojis.component';
import { ViewRelatedComponent } from './view-related/view-related.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyBootComponent } from './my-boot/my-boot.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesComponent } from './directives/directives.component';
import { MagicDirective } from './directives/magic.directive';
import { InfoCardComponent } from './directives/info-card.component';
import { OppIfDirective } from './directives/opp-if.directive';
import { ServicesComponent } from './services/services.component';
import { DataService } from './services/data.service';
import { InterCompV2Component } from './inter-comp-v2/inter-comp-v2.component';
import { PrgComponent } from './inter-comp-v2/prg.component';
import { EmjComponent } from './inter-comp-v2/emj.component';

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
    CalculatorComponent,
    MyBadgeComponent,
    InterCompV1Component,
    ProgressComponent,
    EmojisComponent,
    ViewRelatedComponent,
    LifecycleComponent,
    MyBootComponent,
    DirectivesComponent,
    MagicDirective,
    InfoCardComponent,
    OppIfDirective,
    ServicesComponent,
    InterCompV2Component,
    PrgComponent,
    EmjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxDatatableModule
  ],
  providers: [
    SampleService,
    DataService,
    AggrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
