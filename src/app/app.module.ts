
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EventBiding2Component } from './event-biding2/event-biding2.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyBidingComponent } from './property-biding/property-biding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayBidingComponent } from './two-way-biding/two-way-biding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';



@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBidingComponent,
    EventBidingComponent,
    EventBiding2Component,
    HomeComponent,
    MainBarComponent,
    TwoWayBidingComponent,
    PipesComponent,
    DiretivasAtributoComponent,
    DiretivasEstruturaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
