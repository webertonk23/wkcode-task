import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PessoasComponent } from '../pessoas/pessoas.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PessoasComponent,
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    PessoasComponent
  ]
})
export class PessoasModule { }
