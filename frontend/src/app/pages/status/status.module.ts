import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    StatusComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ToastrModule.forRoot()
  ]
})
export class StatusModule { }
