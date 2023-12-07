import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { TaskComponent } from './task/task.component';
import { PainelComponent } from './painel/painel.component';
import { PaineisComponent } from './paineis.component';
import { CategoriaComponent } from './categoria/categoria.component';




@NgModule({
  declarations: [
    TaskComponent,
    PainelComponent,
    PaineisComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    PaineisComponent
  ]
})
export class PaineisModule { }
