
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Components} from './components/components';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
  
    ...Components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule,
   
  ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...Components,
    ],
  providers: [],
})
export class SharedModule {
}
