import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Crud02Component } from './crud02/crud02.component';
import { CrudComponent } from './crud/crud.component';
import { CursosModule } from './cursos/cursos.module';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { EventBiding2Component } from './event-biding2/event-biding2.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyBidingComponent } from './property-biding/property-biding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { TwoWayBidingComponent } from './two-way-biding/two-way-biding.component';
import { UsersComponent } from './users/users.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ElementDialogComponent } from './shared/element-dialog/element-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AutoCompleteComponent } from './angular-material/auto-complete/auto-complete.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';





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
    DiretivasEstruturaisComponent,
    DependencyInjectionComponent,
    CrudComponent,
    UsersComponent,
    Crud02Component,
    ElementDialogComponent,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //colocar sempre após o BrowserModule
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
    MatMenuModule,
    NgbModule,
    FlexLayoutModule,
    CursosModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatAutocompleteModule



  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
