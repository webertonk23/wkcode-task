import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsRoutingModule } from './sprints-routing.module';
import { FormComponent } from './form/form.component';
import { SprintsComponent } from './sprints.component';


@NgModule({
  declarations: [
    FormComponent,
    SprintsComponent
  ],
  imports: [
    CommonModule,
    SprintsRoutingModule
  ]
})
export class SprintsModule { }
