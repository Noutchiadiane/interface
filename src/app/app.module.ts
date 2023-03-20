import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { TraitementDemandeComponent } from './traitement-demande/traitement-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauDeBordComponent,
    TraitementDemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
