import { TraitementDemandeComponent } from './traitement-demande/traitement-demande.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'tableau-de-bord', component: TableauDeBordComponent},
  {path: 'traitement-demande', component: TraitementDemandeComponent},
  {path: 'logout', component: AppComponent},
  {path: 'register', component: AppComponent},
  {path: 'forget_password', component: AppComponent},
  {path: 'new_password', component: AppComponent},
  //{ path: 'no-content', component: NoContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}