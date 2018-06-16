import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MarbleComponent } from './components/marble/marble.component';
import { SlidableDirective } from './directives/slidable.directive';
import { OperatorComponent } from './components/operator/operator.component';
import { StreamComponent } from './components/stream/stream.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule, MatBadgeModule, MatIconRegistry
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutsideClickDirective } from './directives/outside-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarbleComponent,
    SlidableDirective,
    OperatorComponent,
    StreamComponent,
    MainNavComponent,
    DashboardComponent,
    OutsideClickDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry){
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
