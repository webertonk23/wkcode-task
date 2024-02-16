import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskDirective } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';
import { FormComponent } from './form/form.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksKanbanComponent } from './tasks/tasks-kanban/tasks-kanban.component';



@NgModule({
  declarations: [
    ProjetosComponent,
    FormComponent,
    TasksComponent,
    TasksKanbanComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ToastrModule.forRoot()
  ]
})
export class ProjetosModule { }
