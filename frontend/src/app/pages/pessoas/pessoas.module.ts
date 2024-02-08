import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasComponent } from './pessoas.component';
import { FormComponent } from './form/form.component';
import { CriarComponent } from './criar/criar.component';
import { EditarComponent } from './editar/editar.component';
import { PessoasRoutingModule } from './pessoas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';



@NgModule({
  declarations: [
    PessoasComponent,
    FormComponent,
    CriarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective

  ]
})
export class PessoasModule { }
