import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';
import { PipesComponent } from './pipes/pipes.component';
import { TwoWayBidingComponent } from './two-way-biding/two-way-biding.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { HomeComponent } from './home/home.component';
import { PropertyBidingComponent } from './property-biding/property-biding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBiding2Component } from './event-biding2/event-biding2.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: MainBarComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'event-bind', component: EventBidingComponent },
      { path: 'event-bind2', component: EventBiding2Component },
      { path: 'string-interpolation', component: StringInterpolationComponent },
      { path: 'property-bind', component: PropertyBidingComponent },
      { path: 'two-way-data-binding', component: TwoWayBidingComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'diretivas-de-atributo', component: DiretivasAtributoComponent },
      { path: 'diretivas-estruturais', component: DiretivasEstruturaisComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
