import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { PainelComponent } from './painel/painel.component';
import { PaineisComponent } from './paineis.component';




@NgModule({
  declarations: [
    TaskComponent,
    PainelComponent,
    PaineisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PaineisComponent
  ]
})
export class PaineisModule { }
